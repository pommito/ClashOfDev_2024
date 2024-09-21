import cards from '../../../data/data';

import Header from '../layouts/Header/Header';
import Hero from '../layouts/Hero/Hero';
import Card from '../utils/Card/Card';
import './App.scss';

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      {cards.map((card) => (
        <Card card={card} key={card.title} />
      ))}
    </>
  );
}

export default App;
