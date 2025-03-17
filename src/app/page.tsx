"use client";

import { Button } from "@/shared/components";

export default function HomePage() {
  return (
    <>
      <Button variant="primary" onClick={() => alert("clicked!")}>
        테스트 시작하기
      </Button>
      <Button variant="secondary" onClick={() => alert("clicked!")}>
        문의하기
      </Button>
      <Button variant="option" onClick={() => alert("clicked!")}>
        스트레스 받을 땐 힙합이지
      </Button>
    </>
  );
}
