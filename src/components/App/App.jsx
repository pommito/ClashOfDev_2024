import cards from '../../../data/data';
import Footer from '../layouts/Footer/Footer';

import Header from '../layouts/Header/Header';
import Hero from '../layouts/Hero/Hero';
import Card from '../utils/Card/Card';
import './App.scss';

function App() {
  return (
    <div className="App">
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
