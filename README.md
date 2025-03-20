<h1>SPO-TI TEST </h1>
<p>SPO-TI TEST는 주어진 질문에 답하면 나의 성격에 맞는 음악을 추천해 주는 테스트 서비스입니다. 🙋🏻‍♂️🙋🏻‍♀️</p>
<p>이 서비스는 "알아서 내 마음에 드는 음악을 추천해 줬으면 좋겠다." 라는 한마디에서 시작되었습니다. 🎧</p>
<p>또한, 요즘 많은 사람들이 자신을 알고 정의하고 싶어 하는 트렌드를 반영하여 기획되었습니다. 🤔</p>

<h2>📅 기간</h2>
<p>기획 및 디자인: 2025.01.23 ~ 2025.02.13</p>
<p>개발: 2025.02.14 ~ ing</p>

<h2>👥 팀원</h2>
<p>김해원 (PM): 기획, 디자인, Frontend 개발</p>
<p>이류경: 기획, 디자인, Frontend 개발</p>
<p>김태강: 기획, Backend 개발</p>
<p>이소현: 기획, Backend 개발</p>
<p>이강준: 기획, Backend 개발</p>

<h2>🛠 기술 스택</h2>
<p>Frontend: Next.js, TypeScript, Tailwind CSS</p>
<p>Backend: Java, Spring</p>

<!-- State Management: Jotai, React Query -->
<!-- Auth & Database: Firebase (Google, Naver, Kakao 로그인) -->

<h2>📌 주요 기능</h2>
<p>📝 테스트 진행: 질문에 답변하여 나의 음악 성향을 분석</p>
<p>🎵 음악 추천: 테스트 결과에 따라 맞춤형 플레이리스트 제공</p>
<p>🔄 결과 공유: 친구들과 테스트 결과 공유 (SNS 연동 가능)</p>
<p>💾 저장 기능: 추천받은 플레이리스트를 저장하여 다시 확인 가능</p>

<h2>🌐 Frontend 상세</h2>
<details>
  <summary>폴더 구조</summary>
    <div markdown="1">
    <pre>
    project-root/
    ├─ public/                    # 정적 파일 (이미지, 폰트, favicon 등)
    │  ├─ images/                 # 공통 이미지 (logo, 배경 등)
    │  ├─ icons/                  # SVG, PNG 아이콘
    │  └─ fonts/                  # WOFF, WOFF2 폰트 파일
    │
    ├─ src/
    │  ├─ app/                    # Next.js App Router (라우팅 + layout)
    │  │  ├─ layout.tsx
    │  │  ├─ page.tsx
    │  │  ├─ test-intro/
    │  │  │   └─ page.tsx
    │  │  ├─ music-test/
    │  │  │   └─ page.tsx
    │  │  ├─ result/
    │  │  │   └─ page.tsx
    │  │  ├─ inquiry/
    │  │  │   └─ page.tsx
    │  │  └─ global-error.tsx    # (선택) 전역 에러 처리
    │
    │  ├─ middleware.ts          # 인증, 리디렉션 등 미들웨어
    │
    │  ├─ shared/                # 범용 UI, 스타일, 훅, 유틸
    │  │  ├─ components/         # Button, Input, Typography 등
    │  │  ├─ hooks/              # useDebounce, useMediaQuery 등
    │  │  ├─ styles/             # global.css, colors.ts, typography.ts 등
    │  │  ├─ lib/                # utils, constants, apiClient 등
    │  │  └─ model/              # (선택) 전역 상태가 있다면
    │
    │  ├─ entities/              # 도메인 단위 상태/컴포넌트/타입
    │  │  ├─ user/
    │  │  │   ├─ components/
    │  │  │   ├─ hooks/
    │  │  │   ├─ model/
    │  │  │   └─ types.ts
    │  │  ├─ playlist/
    │  │  │   ├─ components/
    │  │  │   ├─ hooks/
    │  │  │   ├─ model/
    │  │  │   └─ types.ts
    │  │  └─ inquiry/
    │  │      ├─ components/
    │  │      ├─ hooks/
    │  │      ├─ model/
    │  │      └─ types.ts
    │
    │  ├─ features/              # 기능 흐름 단위 구조
    │  │  ├─ testIntro/
    │  │  │   ├─ components/
    │  │  │   └─ hooks/
    │  │  ├─ musicTest/
    │  │  │   ├─ components/
    │  │  │   ├─ hooks/
    │  │  │   └─ model/
    │  │  └─ result/
    │  │      ├─ components/
    │  │      ├─ hooks/
    │  │      └─ model/
    │
    │  ├─ widgets/               # Header, Footer 등 조합형 UI
    │  │  ├─ Header/
    │  │  └─ Footer/
    │
    └─ tailwind.config.ts        # Tailwind 설정
    └─ postcss.config.js         # PostCSS 설정
    └─ tsconfig.json             # TypeScript 설정
    └─ package.json
    └─ .gitignore

    </pre>
    </div>

</details>
