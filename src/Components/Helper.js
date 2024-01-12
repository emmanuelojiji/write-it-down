import "./Helper.scss";

export const Helper = ({
  helperVisible,
  sections,
  setSections,
  selectedSection,
}) => {
  const handleToggleLock = (index) => {
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      locked: !sections[index].locked,
    };

    setSections(updatedSections);

    console.log(sections[index].locked);
  };

  return (
    <aside className={`helper ${helperVisible && "helper-visible"}`}>
      <div className="helper-inner">
        <h3>Helper</h3>
        <button
          className="lock"
          onClick={() => handleToggleLock(selectedSection)}
        >
          LOCK VERSE
        </button>
        <p>
          {selectedSection != "default" && sections[selectedSection].locked}
        </p>
      </div>
    </aside>
  );
};
