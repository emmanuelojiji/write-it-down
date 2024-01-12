import "./Tag.scss"

export const Tag = ({text, background, color}) => {
  return <div className="tag" style={{background: background, color: color}}>{text}</div>;
};


