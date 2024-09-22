import { useRef } from 'react';
import cards from '../../../data/data';
import Footer from '../layouts/Footer/Footer';

import Header from '../layouts/Header/Header';
import Hero from '../layouts/Hero/Hero';
import Card from '../utils/Card/Card';
import ProgressBar from '../utils/ProgressBar/ProgressBar';
import './App.scss';

function App() {
  const scrollRef = useRef(null);

  return (
    <div className="App" ref={scrollRef}>
      <ProgressBar scrollRef={scrollRef} />
      <Header />
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
