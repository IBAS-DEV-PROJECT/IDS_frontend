"use client";

import { useRouter } from "next/navigation";

export const useStartTest = () => {
  const router = useRouter();

  const handleStartClick = () => router.push("/test");

  return { handleStartClick };
};
