import { atom } from "jotai";

export type Answer = {
  questionId: number;
  answer: 0 | 1;
};

export const answersAtom = atom<Answer[]>([]);
