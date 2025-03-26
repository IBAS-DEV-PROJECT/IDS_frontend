import { useMediaQuery } from 'react-responsive';
import { useMounted } from './useMounted';

export const useBreakpoint = () => {
  const isMounted = useMounted();

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (!isMounted) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  }

  return { isMobile, isTablet, isDesktop };
};
