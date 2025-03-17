// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 요청에 따른 처리 로직
  return NextResponse.next();
}

// 필요한 경우 경로 설정 (optional)
export const config = {
  matcher: ["/admin/:path*"], // 미들웨어를 적용할 경로
};
