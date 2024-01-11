import "./Helper.scss";

export const Helper = ({ helperVisible }) => {
  return (
    <aside className={`helper ${helperVisible && "helper-visible"}`}>
      <h3>Helper</h3>
    </aside>
  );
};
