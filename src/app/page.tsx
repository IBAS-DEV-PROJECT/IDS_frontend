"use client";

import { ActionButton } from "@/shared/components";

export default function HomePage() {
  return (
    <>
      <ActionButton styleType="kakao" actionType="save" />
      <ActionButton styleType="image" actionType="save" />
      <ActionButton styleType="insta" actionType="save" />
      <ActionButton styleType="spotify" actionType="save" />
      <ActionButton styleType="twitter" actionType="save" />
    </>
  );
}
