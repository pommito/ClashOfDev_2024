import './Footer.scss';

import pinkCircle from '../../../assets/pinkCircle.svg';
import blueCircle from '../../../assets/blueCircle.svg';
import greenCircle from '../../../assets/greenCircle.svg';
import footerTitle from '../../../assets/footerTitle.svg';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-card">
        <h3>/ FINALE02</h3>
        <h2>
          Click Me ? Might enter the finals{' '}
          <span>
            <img src={footerTitle} alt="What is that ?" />
          </span>
        </h2>
        <div className="Footer-card-cta">
          <button>Enter next level</button>
          <img className="blue" src={blueCircle} alt="icone" />
          <img className="pink" src={pinkCircle} alt="icone" />
          <img className="green" src={greenCircle} alt="icone" />
        </div>
      </div>
      <div className="Footer-bottom">
        <div className="Footer-bottom-logo">La piscine</div>
        <div className="Footer-bottom-pourcentage">100%</div>
        <div className="Footer-bottom-date">@2024</div>
      </div>
    </footer>
  );
};

export default Footer;
