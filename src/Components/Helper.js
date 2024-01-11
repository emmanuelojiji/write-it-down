import "./Helper.scss";

export const Helper = ({ helperVisible }) => {
  return (
    <aside className={`helper ${helperVisible && "helper-visible"}`}>
     <div className="helper-inner">
      <h3>Helper</h3>
      </div>
    </aside>
  );
};
