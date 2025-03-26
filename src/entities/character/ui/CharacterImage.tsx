'use client';

import Image from 'next/image';
import { useBreakpoint } from '@/shared/hooks/useBreakpoint';
import { useEffect, useState } from 'react';

type CharacterImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const CharacterImage = ({
  src,
  alt = '캐릭터 이미지',
  className,
}: CharacterImageProps) => {
  const { isMobile, isTablet } = useBreakpoint();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 너비/높이를 숫자로 계산 → next/image는 숫자 px 단위를 받음
  const { width, height } = isMobile
  ? { width: 248, height: 324 }
  : isTablet
    ? { width: 300, height: 392 }           
      : { width: 360, height: 470 };         
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className ?? ''}`}
    />
  );
};

export default CharacterImage;
