import "./Button.scss";

export const Button = ({ text, onClick, borderRadius }) => {
  return (
    <button
      className={`button`}
      onClick={onClick}
      style={{ borderRadius: borderRadius }}
    >
      {text}
    </button>
  );
};
