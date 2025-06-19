import React from 'react';
import { useBannerVisible } from '../hooks/useBannerVisible';

const AdvertorialBanner: React.FC = () => {
  const isVisible = useBannerVisible();

  if (!isVisible) return null;

  return (
    <div className="w-full bg-secondary-800 text-white text-s text-center py-2 tracking-wide font-semibold">
      ADVERTORIAL
    </div>
  );
};

export default AdvertorialBanner;
