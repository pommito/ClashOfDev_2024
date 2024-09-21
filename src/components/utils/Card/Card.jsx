import './Card.scss';

import Cursor from '../Cursor/Cursor';

const Card = ({ card }) => {
  console.log(card);

  return (
    <section className={`Card ${card.color}`}>
      <div className="Card-infos">
        <div className="Card-infos-category">
          <h4>{card.category}</h4>
          <h5>{card.notation}</h5>
        </div>
        <h3>{card.title}</h3>
        <div className="Card-infos-reviewers">
          {card.cursors.map((cursor) => (
            <Cursor color={card.color} pseudo={cursor.pseudo} isReversed={cursor.isReversed} key={cursor.pseudo} />
          ))}
        </div>
      </div>
      <div className="Card-content">
        <img
          className="Card-content-image"
          src={card.illustration}
          alt={`illustration de la catégorie ${card.category}`}
        />
        <div className="Card-content-text">
          <p dangerouslySetInnerHTML={{ __html: card.p1 }}></p>
          <p dangerouslySetInnerHTML={{ __html: card.p2 }}></p>
        </div>
      </div>
      <img className="Card-sticker" src={card.sticker} alt="sticker de la catégorie design" />
    </section>
  );
};

export default Card;
