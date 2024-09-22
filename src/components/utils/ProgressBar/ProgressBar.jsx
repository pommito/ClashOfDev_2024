import './ProgressBar.scss';

const ProgressBar = ({ scrollProgress }) => {
  return <div className="ProgressBar" style={{ width: `${scrollProgress}%` }}></div>;
};

export default ProgressBar;
