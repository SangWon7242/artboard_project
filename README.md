# Artboard - Neo-Brutalism Creative Gallery

Pinterest 스타일의 Masonry 레이아웃을 활용한 네오브루탈리즘 디자인의 크리에이티브 갤러리 웹사이트입니다.

## Preview

전 세계 크리에이터들의 영감 넘치는 작품을 발견하고, 그래픽 디자인, 일러스트레이션, 타이포그래피, 3D 아트 등 다양한 창작물을 탐색할 수 있습니다.

## Features

- **네오브루탈리즘 디자인**: 굵은 테두리, 오프셋 그림자, 생생한 컬러 팔레트
- **Masonry 레이아웃**: Pinterest 스타일의 반응형 갤러리 그리드
- **인터랙티브 3D 모델**: Spline을 활용한 3D 큐브 인터랙션
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 지원
- **모바일 사이드바**: 터치 친화적인 모바일 네비게이션

## Tech Stack

- **HTML5**: 시맨틱 마크업
- **SCSS**: 모듈화된 스타일 시스템
- **CSS3**: Flexbox, Grid, CSS Variables
- **JavaScript**: Vanilla JS
- **Fonts**: Space Grotesk, Space Mono, Pretendard

## Project Structure

```
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 컴파일된 CSS
├── scss/
│   ├── base/           # 리셋, 변수, 믹스인
│   ├── components/     # 버튼, 카드, 폼 등
│   ├── layout/         # 헤더, 푸터, 사이드바
│   ├── pages/          # 페이지별 스타일
│   └── main.scss       # 메인 SCSS 파일
├── js/
│   └── main.js         # 메인 JavaScript
└── assets/
    ├── images/
    └── fonts/
```

## Getting Started

1. 프로젝트를 클론합니다:

   ```bash
   git clone https://github.com/SangWon7242/artboard-neo-brutalism.git
   ```

2. Live Server 익스텐션을 사용하여 `index.html`을 실행합니다.

## Design Principles

### Neo-Brutalism

- **Bold Borders**: 3-4px 두께의 검은색 테두리
- **Offset Shadows**: 오프셋된 하드 그림자 효과
- **Vibrant Colors**: 노란색(#ffcc00), 파란색(#5271ff), 핑크(#ff6b9d) 등
- **Raw Aesthetics**: 정직하고 대담한 디자인 언어

### BEM Methodology

CSS 클래스 네이밍에 BEM(Block Element Modifier) 방법론을 사용합니다.

- Block: `.card`, `.header`
- Element: `.card__title`, `.header__nav`
- Modifier: `.card--yellow`, `.btn--primary`

## License

MIT License

## Author

SangWon7242
