import { useEffect, useState } from 'react';

export const useBannerVisible = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsBannerVisible(window.scrollY < 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isBannerVisible;
};
