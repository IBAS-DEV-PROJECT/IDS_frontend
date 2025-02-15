<h1>SPO-TI TEST </h1>
<p>SPO-TI TEST는 주어진 질문에 답하면 나의 성격에 맞는 음악을 추천해 주는 테스트 서비스입니다. 🙋🏻‍♂️🙋🏻‍♀️</p>
<p>이 서비스는 "알아서 내 마음에 드는 음악을 추천해 줬으면 좋겠다." 라는 한마디에서 시작되었습니다. 🎶</p>
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

<h2>🌐 Frontend 상세</h2>
<details>
  <summary>폴더 구조</summary>
    <div markdown="1">
    <pre>
    ids_frontend/
    ├── public/                 # 정적 파일 (이미지, 아이콘, 폰트 등)
    ├── src/
    │   ├── app/                # Next.js App Router (폴더 기반 라우팅)
    │   │   ├── layout.tsx      # 공통 레이아웃
    │   │   ├── page.tsx        # 랜딩 페이지 (`/`)
    │   │   ├── loading.tsx     # 전역 로딩 UI
    │   │   ├── error.tsx       # 전역 에러 핸들링
    │   │   │
    │   │   ├── test/           # 음악 취향 테스트 기능
    │   │   │   ├── [step]/     # 테스트 진행 단계
    │   │   │
    │   │   ├── result/         # 테스트 결과 페이지
    │   │   │
    │   │   ├── inquiry/        # 사용자 문의 관련 기능
    │   │   │   ├── success/    # 문의 작성 완료 페이지
    │   │   │
    │   │   ├── admin/          # 관리자 페이지
    │   │   │   ├── inquiry/    # 관리자 문의 관리 기능
    │   │   │   │   ├── [id]/   # 개별 문의 보기
    │   │   │
    │   ├── shared/             # 공통 모듈 (FSD 적용)
    │   │   ├── components/     # 재사용 가능한 UI 컴포넌트
    │   │   ├── hooks/          # 커스텀 훅
    │   │   ├── styles/         # Tailwind 관련 글로벌 스타일
    │   │   ├── utils/          # 유틸리티 함수
    │   │   ├── types/          # TypeScript 타입 정의
    │   │
    │   ├── features/           # 특정 기능별 모듈화 (FSD 적용)
    │   │   ├── test/           # 테스트 기능 관련
    │   │   ├── inquiry/        # 문의 기능 관련
    │   │
    │   ├── providers/          # 전역 상태 관리 (Context API)
    │   │
    │   ├── services/           # API 요청 관리
    │   │
    │   ├── middleware.ts       # 관리자 페이지 보호 (Middleware 적용)
    │
    ├── .eslint.json            # ESLint 설정
    ├── .prettierrc.js          # Prettier 설정
    ├── tailwind.config.ts      # Tailwind 설정
    ├── tsconfig.json           # TypeScript 설정
    ├── next.config.js          # Next.js 설정
    └── package.json            # 프로젝트 설정
    </pre>
    </div>
</details>
