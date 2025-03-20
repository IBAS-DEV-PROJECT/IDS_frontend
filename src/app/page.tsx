"use client";

import { Badge } from "@/shared/components";

export default function HomePage() {
  return (
    <>
      <Badge type="resolved" />
      <Badge type="unresolved" />
      <Badge type="pending" />
    </>
  );
}
