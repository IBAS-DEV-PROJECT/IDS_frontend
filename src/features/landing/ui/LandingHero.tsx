"use client";

// ui
import CharacterImage from "@/entities/character/ui/CharacterImage";
import Participant from "@/entities/user/ui/Participant";
import { Button } from "@/shared/ui";

// model
import { useStartTest } from "../model/useStartTest";

const LandingHero = () => {
  const { handleStartClick } = useStartTest();

  return (
    <div className="flex flex-col justify-start items-center gap-6 h-full">
      <CharacterImage src="/images/landing_character.png" />

      <div className="flex flex-col justify-between items-center h-[25vh]">
        <div className="flex flex-col justify-center items-center bg-gray w-[15.5rem] h-[4.25rem] rounded-xl">
          <p className="text-center leading-relaxed">
            <strong>음악 취향 테스트</strong>하고 <br />
            <strong>오늘의 음악</strong>을 추천 받으세요!
          </p>
        </div>
        <Participant />
        <Button onClick={handleStartClick}>테스트 시작하기</Button>
      </div>
    </div>
  );
};

export default LandingHero;
