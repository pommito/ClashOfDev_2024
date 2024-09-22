import './Header.scss';

import image from '../../../assets/toggleButton.svg';
import { useState } from 'react';

const Header = ({ scrollProgress }) => {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const scrollPourcent = Math.round(scrollProgress);

  const handleThemeSwitch = () => {
    setIsThemeLight(!isThemeLight);
  };

  return (
    <header className="Header">
      <div className="Header-logo">La piscine</div>
      <div className="Header-pourcentage">{`${scrollPourcent} %`}</div>

      <button className="Header-button" onClick={handleThemeSwitch}>
        <div className={`Header-button-toggle ${isThemeLight ? '' : 'dark'}`}>
          <img src={image} alt="" />
        </div>
      </button>
    </header>
  );
};

export default Header;
