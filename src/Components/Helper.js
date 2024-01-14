import { useRef, useState } from "react";
import "./Helper.scss";

export const Helper = ({
  helperVisible,
  sections,
  setSections,
  selectedSection,
  setHelperVisible,
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

  const helperRef = useRef(null);

  const handleOutsideHelperClick = (e) => {
    if (helperRef.current && !helperRef.current.contains(e.target)) {
      setHelperVisible(false);
    }
  };

  document.addEventListener("mousedown", (e) => {
    handleOutsideHelperClick(e);
  });

  return (
    <aside
      className={`helper ${helperVisible && "helper-visible"}`}
      ref={helperRef}
    >
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
