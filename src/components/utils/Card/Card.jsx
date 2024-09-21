import './Card.scss';

import Cursor from '../Cursor/Cursor';

import stickerDesign from '../../../assets/stickerDesign.svg';
import image from '../../../assets/design.png';

const Card = () => {
  return (
    <section className="Card">
      <div className="Card-infos">
        <div className="Card-infos-category">
          <h4>DESIGN</h4>
          <h5>/6 pts</h5>
        </div>
        <h3>L'artiste de renom</h3>
        <div className="Card-infos-reviewers">
          <Cursor color="purple" pseudo="@maislina_" isReversed={false} />
        </div>
      </div>
      <div className="Card-content">
        <img className="Card-content-image" src={image} alt="Illsutration de la catégorie design" />
        <div className="Card-content-text">
          <p>
            <b>Le design</b>, c’est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la
            maquette.
          </p>
          <p>
            Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ;{' '}
            <b>Figma n’a aucun secret pour ce Dev de talent</b>.
          </p>
        </div>
      </div>
      <img className="Card-sticker" src={stickerDesign} alt="sticker de la catégorie design" />
    </section>
  );
};

export default Card;
