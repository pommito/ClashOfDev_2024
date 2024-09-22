import { useEffect, useRef } from 'react';
import Cursor from '../../utils/Cursor/Cursor';
import subtitleLogo from '../../../assets/subtitle_logo.svg';
import card from '../../../assets/card.svg';
import logoCOD from '../../../assets/heroLogoCOD.svg';
import './Hero.scss';

const Hero = () => {
  const cursorsRef = useRef([]);

  useEffect(() => {
    const animateCursors = () => {
      cursorsRef.current.forEach((cursor, index) => {
        if (cursor) {
          // Vérification de sécurité
          const speed = 1 + index * 0.1;
          const angle = Date.now() * 0.001 * speed;
          const x = Math.sin(angle) * 20;
          const y = Math.cos(angle) * 10;

          cursor.style.transform = `translate(-${x}px, ${y}px)`;
        }
      });

      requestAnimationFrame(animateCursors);
    };

    animateCursors();
  }, []);

  return (
    <section className="Hero">
      <div className="Hero-content">
        <h2 className="Hero-content-subtitle">
          Que le <img className="mobile" src={subtitleLogo} alt="Logo clash of devs" /> plus fort,{' '}
          <img className="desktop" src={subtitleLogo} alt="Logo clash of devs" />
          <em> l'emporte !</em>
        </h2>
        <div className="Hero-content-visual">
          <img src={card} alt="the card of clash of devs" className="Hero-content-visual-card" />
          <img src={logoCOD} alt="Logo clash of dev" className="Hero-content-visual-logo" />
          <Cursor ref={(el) => (cursorsRef.current[0] = el)} color="pink" pseudo="@sometimecrea" isReversed={true} />
          <Cursor ref={(el) => (cursorsRef.current[1] = el)} color="orange" pseudo="@maislina_" isReversed={false} />
          <Cursor ref={(el) => (cursorsRef.current[2] = el)} color="blue" pseudo="@LLCoolChris" isReversed={false} />
        </div>
      </div>
      <h1 className="Hero-title">&lt;A&gt; Front les tous ! Clash of Devs !</h1>
    </section>
  );
};

export default Hero;
