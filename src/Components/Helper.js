import "./Helper.scss";

export const Helper = ({ helperVisible }) => {
  return (
    <aside className={`helper ${helperVisible && "helper-visible"}`}>
      <h3>helper</h3>
    </aside>
  );
};
