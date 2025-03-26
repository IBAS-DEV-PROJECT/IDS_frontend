"use client";

import Participant from "@/entities/user/ui/Participant";
import { Button } from "@/shared/ui";
import CharacterImage from "@/entities/character/ui/CharacterImage";

export default function HomePage() {

  return (
    <>
      <div className="flex">
        <CharacterImage src="/images/landing_character.png" />
      </div>
    </>
  );
}
