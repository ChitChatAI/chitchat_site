import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  path: string;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ path, style }) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie animation:', err));
  }, [path]);

  if (!animationData)
    return <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

  return <Lottie animationData={animationData} loop autoplay style={style} />;
};

export default LottieAnimation;
