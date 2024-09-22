import { useRef, useState, useEffect } from 'react';
import ProgressBar from '../utils/ProgressBar/ProgressBar';
import Header from '../layouts/Header/Header';
import Hero from '../layouts/Hero/Hero';
import Card from '../utils/Card/Card';
import Footer from '../layouts/Footer/Footer';

// Data
import cards from '../../data/data';

// Styling
import './App.scss';
import { useTheme } from '../../hooks/useTheme';

function App() {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

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

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`} ref={scrollRef}>
      <ProgressBar scrollProgress={scrollProgress} />
      <Header scrollProgress={scrollProgress} />
      <main>
        <Hero />
        <div className="Card-container">
          {cards.map((card) => (
            <Card card={card} key={card.title} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
