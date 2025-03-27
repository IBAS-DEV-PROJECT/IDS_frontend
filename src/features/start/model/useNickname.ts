import { useAtom } from "jotai";
import { nicknameAtom } from "./nicknameAtom";

export const useNickname = () => {
  const [nickname, setNickname] = useAtom(nicknameAtom);
  return { nickname, setNickname };
};
