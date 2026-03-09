# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🌍 언어 및 커뮤니케이션 규칙

### 기본 응답 언어
- **한국어**: 모든 응답은 한국어로 작성

### 코드 스타일
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 사용 (코드 표준 준수, camelCase)

### 예시
```javascript
// 좋은 예시
function calculateTotalPrice(items) {
  // 총 가격 계산
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 피해야 할 예시
function 총가격계산(항목들) {
  // 총 가격 계산
  return 항목들.reduce((합, 항목) => 합 + 항목.가격, 0);
}
```

---

## 📁 프로젝트 구조

```
developer-portfolio-resume/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── styles/
│   └── style.css          # 커스텀 CSS (TailwindCSS 보충)
├── scripts/
│   └── main.js            # 클라이언트 사이드 JavaScript
├── assets/
│   ├── images/            # 프로젝트 및 프로필 이미지
│   └── icons/             # SVG/아이콘 파일
├── package.json           # npm 패키지 설정
├── tailwind.config.js     # TailwindCSS 커스터마이징 설정
├── .gitignore             # Git 제외 파일
├── README.md              # 프로젝트 문서
└── ROADMAP.md             # 개발 로드맵
```

### 핵심 아키텍처

**단일 페이지 애플리케이션 (SPA) 스타일**
- 모든 콘텐츠가 `index.html`에 포함
- JavaScript는 부드러운 스크롤, 다크모드, 모바일 메뉴만 처리
- 라우팅 없음 (앵커 링크 사용)

**스타일 계층**
1. **TailwindCSS** (유틸리티 클래스): 대부분의 스타일
2. **style.css** (커스텀): 애니메이션, 호버 효과, 반응형 미디어 쿼리

**JavaScript 모듈화**
- `main.js`는 다음 기능으로 나뉨:
  1. 다크모드 토글 (localStorage 저장)
  2. 모바일 메뉴 토글
  3. 네비게이션 스크롤 효과
  4. 부드러운 스크롤 네비게이션
  5. IntersectionObserver를 이용한 페이드인 애니메이션

---

## 🚀 개발 명령어

### 설치
```bash
npm install
```

### 개발 모드 (TailwindCSS 감시)
```bash
npm run dev
```

### 빌드 (TailwindCSS 최소화)
```bash
npm run build
```

### 로컬 서버 실행 (선택사항)
```bash
# Python 3
python -m http.server 8000

# Node.js (live-server 설치 필요)
npx live-server
```

---

## 🛠️ 기술 스택 상세 정보

### Frontend
| 기술 | 용도 | 버전 |
|------|------|------|
| HTML5 | 마크업 | - |
| CSS3 | 기본 스타일 | - |
| TailwindCSS | 유틸리티 스타일 | ^3.3.0 |
| JavaScript (ES6+) | 상호작용 | - |

### 디자인 시스템
- **색상 팔레트**: TailwindCSS 기본 색상 + 커스텀
  - Primary: `#3B82F6` (파란색)
  - Secondary: `#10B981` (초록색)
  - Dark: `#1F2937` (어두운 회색)
- **폰트**: Google Fonts "Inter" (Fallback: Segoe UI, Roboto)
- **다크모드**: CSS `dark:` 클래스 기반

### 브라우저 지원
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📝 개발 가이드라인

### HTML 작성
- Semantic HTML5 마크업 사용 (nav, section, article, etc.)
- 접근성 고려 (alt 텍스트, ARIA 속성)
- 섹션별 id 속성 필수 (네비게이션 앵커)

### CSS 작성
- TailwindCSS 클래스 우선 사용
- 커스텀 스타일은 `style.css`에만 추가
- 다크모드: `dark:` 프리픽스 사용
- 애니메이션: `@keyframes` 사용

### JavaScript 작성
- Vanilla JS (프레임워크 없음)
- ES6+ 문법 사용 (arrow function, const/let)
- 주석은 한국어로 작성
- 함수는 `camelCase`로 명명

### 커밋 메시지 형식
```
[타입] 제목 설명

예시:
[기능] 프로필 섹션 추가
[수정] 다크모드 토글 버그 수정
[스타일] 네비게이션 반응형 개선
[문서] README 업데이트
```

### 파일 명명 규칙
- HTML: `index.html` (메인 파일만 사용)
- CSS: `style.css` (커스텀 스타일)
- JS: `main.js` (메인 스크립트)
- 이미지: `kebab-case` (예: `profile-photo.jpg`)

---

## 🎨 주요 섹션별 개발 포인트

### 네비게이션
- 고정 위치 (sticky)
- 스크롤 시 그림자 추가
- 모바일 메뉴는 토글로 표시/숨김
- 현재 섹션 강조 표시

### Hero 섹션
- 풀 높이 (min-h-screen)
- 그라데이션 배경
- 큰 타이포그래피

### 섹션 공통사항
- `max-w-4xl` 컨테이너 너비
- 패딩: `py-20 px-4`
- 반응형: md: (768px 이상)에서 2열 이상

### 다크모드
- localStorage에 사용자 선호도 저장
- 시스템 다크모드 자동 감지
- 페이지 로드 시 복구

---

## 📦 배포 가이드

### GitHub Pages
```bash
git add .
git commit -m "[배포] GitHub Pages 배포"
git push origin main
```
GitHub 저장소 Settings > Pages에서 활성화

### Netlify / Vercel
- 저장소 연결
- 빌드 명령: `npm run build` (선택사항)
- Publish directory: `.` (루트)

---

## 🔧 자주 변경할 항목

### 개인 정보 업데이트
- `index.html` 검색:
  - 이름, 직책 (Hero 섹션)
  - 자기소개 (About 섹션)
  - 경력 정보 (Experience 섹션)
  - 기술 스택 (Skills 섹션)
  - 프로젝트 (Projects 섹션)
  - 연락처 정보 (Contact 섹션)

### 색상 테마 변경
- `tailwind.config.js` 수정:
  ```javascript
  colors: {
    primary: '#새로운색상',
    secondary: '#새로운색상',
  }
  ```

### 이미지 추가
- `./assets/images/` 폴더에 추가
- `index.html`의 `src` 경로 업데이트

---

## 📊 성능 고려사항

- 이미지는 압축 및 최적화 필수 (WebP 권장)
- TailwindCSS는 빌드 시 사용되지 않는 클래스 제거 (treeshaking)
- Lighthouse 점수 목표: 90+ (Performance, Accessibility, Best Practices, SEO)
- 번들 크기: JavaScript < 50KB (최소화 후)

---

## 🚨 주의사항

- HTML 구조 변경 시 네비게이션 id도 동시에 업데이트
- TailwindCSS 커스텀 색상 추가 시 여러 곳에 영향 (검색 필요)
- 다크모드는 전체 페이지에 적용 (선택적 섹션 불가)
- 외부 CDN에 의존 (TailwindCSS CDN, Google Fonts) - 오프라인 빌드 시 수정 필요

---

## 📚 참고 자료

- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [웹 접근성 가이드](https://www.w3.org/WAI/)
- [SEO 최적화](https://developers.google.com/search)

---

**마지막 업데이트**: 2024년 3월 9일
