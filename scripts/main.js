// ===== 다크 모드 토글 기능 =====
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 페이지 로드 시 사용자 설정 복구 (기본값: 다크모드)
const savedTheme = localStorage.getItem('theme');
if (savedTheme !== 'light') {
  htmlElement.classList.add('dark');
}

// 다크 모드 토글 이벤트
themeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  const isDark = htmlElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== 모바일 메뉴 토글 =====
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 메뉴 항목 클릭 시 메뉴 닫기
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ===== 네비게이션 스크롤 효과 =====
const navbar = document.getElementById('navbar');
let lastScrollPos = 0;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  // 스크롤할 때 그림자 추가
  if (currentScrollPos > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }

  lastScrollPos = currentScrollPos;
});

// ===== 부드러운 스크롤 네비게이션 =====
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== 스크롤 시 네비게이션 활성 상태 업데이트 =====
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // 현재 섹션에 해당하는 네비게이션 링크 활성화
      const currentId = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ===== 스크롤 애니메이션 (페이드인) =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 모든 섹션과 fade-in-element에 visible 클래스를 토글
document.querySelectorAll('section, .fade-in-element').forEach(element => {
  observer.observe(element);
});

// ===== 프로필 이미지 로드 에러 처리 =====
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext x="50%" y="50%" font-size="20" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage Not Found%3C/text%3E%3C/svg%3E';
  });
});

// ===== 페이지 로드 완료 시 애니메이션 =====
window.addEventListener('load', () => {
  console.log('포트폴리오 사이트 로드 완료');
});
