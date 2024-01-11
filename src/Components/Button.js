import "./Button.scss";

export const Button = ({ text, onClick, shake }) => {
  return (
    <button className={`button ${shake}`} onClick={onClick}>
      {text}
    </button>
  );
};
