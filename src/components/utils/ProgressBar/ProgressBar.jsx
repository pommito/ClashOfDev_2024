import { useState, useEffect } from 'react';

import './ProgressBar.scss';

const ProgressBar = ({ scrollRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      console.log(scrollPercent);

      setScrollProgress(scrollPercent);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScrollProgress);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScrollProgress);
      }
    };
  }, [scrollRef]);

  return <div className="ProgressBar" style={{ width: `${scrollProgress}%` }}></div>;
};

export default ProgressBar;
