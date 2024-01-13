import "./Button.scss";

export const Button = ({ text, type, onClick, borderRadius }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={onClick}
      style={{ borderRadius: borderRadius }}
    >
      {text}
    </button>
  );
};
