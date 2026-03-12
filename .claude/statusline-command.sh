#!/usr/bin/env bash
# Claude Code statusLine 명령어 스크립트
# 형식: 현재 사용하는 모델 | context 사용량 | Token 사용량

input=$(cat)

# 현재 모델 이름
model=$(echo "$input" | jq -r '.model.display_name // "Unknown Model"')

# 컨텍스트 사용량 (퍼센트)
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

if [ -n "$used_pct" ]; then
  used_pct_int=$(printf "%.0f" "$used_pct")
  ctx_str="${used_pct_int}%"
else
  ctx_str="-"
fi

# 토큰 사용량 (누적 입력 + 출력)
total_input=$(echo "$input" | jq -r '.context_window.total_input_tokens // 0')
total_output=$(echo "$input" | jq -r '.context_window.total_output_tokens // 0')
total_tokens=$((total_input + total_output))

if [ "$total_tokens" -ge 1000 ]; then
  total_k=$(awk "BEGIN {printf \"%.1f\", $total_tokens/1000}")
  token_str="${total_k}k"
else
  token_str="${total_tokens}"
fi

# 색상 ANSI 코드
CYAN='\033[0;36m'
YELLOW='\033[0;33m'
GREEN='\033[0;32m'
RESET='\033[0m'

printf "${CYAN}%s${RESET} | ${YELLOW}Context: %s${RESET} | ${GREEN}Tokens: %s${RESET}" \
  "$model" \
  "$ctx_str" \
  "$token_str"
