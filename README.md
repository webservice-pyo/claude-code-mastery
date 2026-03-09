# 개발자 웹 이력서 포트폴리오

HTML, CSS, JavaScript, TailwindCSS를 이용한 개발자용 웹 이력서 포트폴리오 사이트

## 🚀 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 다크모드 토글
- ✅ 부드러운 스크롤 네비게이션
- ✅ 스크롤 애니메이션
- ✅ 모바일 메뉴
- ✅ SEO 최적화

## 📁 프로젝트 구조

```
project/
├── index.html              # 메인 HTML 파일
├── styles/
│   └── style.css          # 커스텀 스타일
├── scripts/
│   └── main.js            # JavaScript 기능
├── assets/
│   ├── images/            # 프로젝트 이미지
│   └── icons/             # 아이콘
├── package.json           # 프로젝트 설정
├── tailwind.config.js     # TailwindCSS 설정
└── README.md              # 문서
```

## 🛠️ 기술 스택

- **마크업**: HTML5
- **스타일**: CSS3, TailwindCSS
- **스크립트**: Vanilla JavaScript (ES6+)
- **프레임워크**: 없음 (가벼운 사이트)

## 💻 설치 및 실행

### 필수 요구사항
- Node.js 14+ (TailwindCSS 사용 시)
- npm 또는 yarn

### 설치

```bash
# 프로젝트 폴더로 이동
cd developer-portfolio-resume

# 패키지 설치
npm install
```

### 개발 모드

```bash
# TailwindCSS 감시 모드 실행
npm run dev
```

### 빌드

```bash
# TailwindCSS 최소화 빌드
npm run build
```

### 서버 실행

```bash
# 간단한 HTTP 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Live Server 확장 프로그램 사용 (VS Code)
```

브라우저에서 `http://localhost:8000` 열기

## 🎨 섹션 구성

### 1. 헤더/네비게이션
- 로고 및 네비게이션 메뉴
- 다크모드 토글
- 모바일 메뉴 (반응형)

### 2. Hero 섹션
- 자기소개
- CTA 버튼 (연락하기, 포트폴리오)

### 3. 소개 섹션
- 프로필 사진
- 자기소개 텍스트
- 소셜 링크

### 4. 경력 섹션
- 직무 경력 리스트
- 역할 및 성과 설명

### 5. 기술 스택 섹션
- 프로그래밍 언어
- 프레임워크/라이브러리
- 도구 및 플랫폼

### 6. 프로젝트 섹션
- 프로젝트 카드
- 기술 스택 태그
- 링크 (GitHub, 라이브 데모)

### 7. 연락처 섹션
- 이메일, 전화
- 소셜 미디어 링크

### 8. 푸터
- 저작권 정보

## 🎯 커스터마이징

### 개인 정보 수정

`index.html`의 다음 항목들을 수정하세요:

- 이름 및 직책
- 자기소개 텍스트
- 경력 정보
- 기술 스택
- 프로젝트 정보
- 연락처

### 이미지 추가

`./assets/images/` 폴더에 이미지 파일을 추가한 후 `index.html`에서 경로를 업데이트하세요.

### 색상 테마 수정

`tailwind.config.js`의 `theme.extend.colors` 섹션을 수정하세요:

```javascript
colors: {
  primary: '#3B82F6',      // 주 색상
  secondary: '#10B981',    // 보조 색상
  dark: '#1F2937',
  light: '#F9FAFB',
}
```

## 📱 반응형 디자인

- **모바일** (< 640px): 단일 열 레이아웃
- **태블릿** (640px - 1024px): 2열 레이아웃
- **데스크톱** (> 1024px): 3열 레이아웃

## 🌐 배포

### GitHub Pages
```bash
git push origin main
# GitHub 저장소 설정에서 Pages 활성화
```

### Netlify
```bash
# netlify.com에서 저장소 연결
# 자동 배포 설정
```

### Vercel
```bash
# vercel.com에서 저장소 연결
# 자동 배포 설정
```

## 📊 성능 최적화

- 이미지 최적화 (WebP, 압축)
- CSS/JS 최소화
- 캐싱 전략
- Lighthouse 점수 확인

## 🔍 SEO 최적화

- 메타 태그 설정
- 구조화된 데이터 (Schema.org)
- Open Graph 태그
- Sitemap (선택사항)

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 👨‍💻 지원

문제가 있거나 제안사항이 있으면 GitHub Issues를 열어주세요.

---

**마지막 업데이트**: 2024년 3월
