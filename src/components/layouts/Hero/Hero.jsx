import { useEffect, useRef } from 'react';
import Cursor from '../../utils/Cursor/Cursor';
import subtitleLogo from '../../../assets/subtitle_logo.svg';
import card from '../../../assets/card.svg';
import logoCOD from '../../../assets/heroLogoCOD.svg';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-content">
        <h2 className="Hero-content-subtitle">
          <span>
            Que le <img className="mobile" src={subtitleLogo} alt="Logo clash of devs" /> plus fort,
            <br /> <img className="desktop" src={subtitleLogo} alt="Logo clash of devs" />
            <em> l'emporte !</em>
          </span>
        </h2>
        <div className="Hero-content-visual">
          <img src={card} alt="the card of clash of devs" className="Hero-content-visual-card" />
          <img src={logoCOD} alt="Logo clash of dev" className="Hero-content-visual-logo" />
          <Cursor color="pink" pseudo="@sometimecrea" isReversed={true} />
          <Cursor color="orange" pseudo="@maislina_" isReversed={false} />
          <Cursor color="blue" pseudo="@LLCoolChris" isReversed={false} />
        </div>
      </div>
      <h1 className="Hero-title">&lt;A&gt; Front les tous ! Clash of Devs !</h1>
    </section>
  );
};

export default Hero;
