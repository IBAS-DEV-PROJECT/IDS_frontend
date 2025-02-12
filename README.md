```
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
```
