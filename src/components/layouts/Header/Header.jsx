import './Header.scss';

import image from '../../../assets/toggleButton.svg';
import { useTheme } from '../../../hooks/useTheme';

const Header = ({ scrollProgress }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const scrollPourcent = Math.round(scrollProgress);

  return (
    <header className="Header">
      <div className="Header-logo">La piscine</div>
      <div className="Header-pourcentage">{`${scrollPourcent} %`}</div>

      <button className="Header-button" onClick={toggleDarkMode}>
        <div className={`Header-button-toggle ${isDarkMode ? 'dark' : ''}`}>
          <img src={image} alt="" />
        </div>
      </button>
    </header>
  );
};

export default Header;
