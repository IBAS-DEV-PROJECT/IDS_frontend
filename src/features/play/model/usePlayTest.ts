import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { answersAtom } from "./answersAtom";
import { useQuestions } from "./useQuestions";
import { useCurrentStep } from "./useCurrentStep";
import { postRequest } from "@/shared/hooks/useApi";

export const usePlayTest = () => {
  const router = useRouter();

  const { data: questions, isLoading, error } = useQuestions();
  const [answers, setAnswers] = useAtom(answersAtom);
  const { currentStep, nextStep, prevStep } = useCurrentStep(
    questions?.length ?? 0,
  );

  const currentQuestion = questions?.[currentStep];

  const handleSelect = async (answerIndex: 0 | 1) => {
    if (!currentQuestion) return;

    const questionId = currentQuestion.id;

    setAnswers((prev) => {
      const newAnswers = [...prev];
      const existingIndex = newAnswers.findIndex(
        (a) => a.questionId === questionId,
      );

      const answerObj = { questionId, answer: answerIndex };

      if (existingIndex !== -1) {
        newAnswers[existingIndex] = answerObj;
      } else {
        newAnswers.push(answerObj);
      }

      return newAnswers;
    });

    if (currentStep === questions!.length - 1) {
      try {
        await postRequest('/api/test/submit', { answers });
        router.push("/result");
      } catch (error) {
        console.error('Failed to submit test:', error);
      }
    } else {
      nextStep();
    }
  };

  return {
    isLoading,
    error,
    questions,
    currentQuestion,
    currentStep,
    total: questions?.length ?? 0,
    handleSelect,
    prevStep,
    nextStep,
  };
};
