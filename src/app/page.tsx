"use client";

import { useState } from "react";
import { ProgressIndicator } from "@/shared/components";

export default function HomePage() {
  // const [currentStep, setCurrentStep] = useState(1);
  // const totalSteps = 12;

  // const handlePrev = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep((prev) => prev - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentStep < totalSteps) {
  //     setCurrentStep((prev) => prev + 1);
  //   } else {
  //     handleSubmitResult();
  //   }
  // };

  // const handleSubmitResult = async () => {
  //   alert("제출");
  // };

  return (
    <>
      <h1>랜딩 페이지입니다.</h1>
      {/* <ProgressIndicator
        current={currentStep}
        total={totalSteps}
        onPrev={handlePrev}
        onNext={handleNext}
      /> */}
    </>
  );
}
