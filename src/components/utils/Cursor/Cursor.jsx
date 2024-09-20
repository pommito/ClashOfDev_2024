import './Cursor.scss';

const Cursor = ({ color, pseudo, isReversed }) => {
  return (
    <div className={`Cursor ${isReversed ? 'Reversed' : ''}`}>
      <svg className={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path>
      </svg>
      <span className={`Cursor-text ${color}`}>{pseudo}</span>
    </div>
  );
};

export default Cursor;
