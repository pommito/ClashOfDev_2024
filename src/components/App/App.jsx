import { useRef, useState, useEffect } from 'react';
import './App.scss';
import cards from '../../../data/data';

import ProgressBar from '../utils/ProgressBar/ProgressBar';
import Header from '../layouts/Header/Header';
import Hero from '../layouts/Hero/Hero';
import Card from '../utils/Card/Card';
import Footer from '../layouts/Footer/Footer';

function App() {
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
    <div className="App" ref={scrollRef}>
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
