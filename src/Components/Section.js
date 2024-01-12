import "./Section.scss";
import { useEffect, useState } from "react";

export const Section = ({
  onClick,
  section,
  sections,
  lines,
  setSections,
  index,
  isSelected,
  notSelected,
}) => {
  const handleLineUpdate = (sectionIndex, text) => {
    const splitLines = text.split("\n");
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lines = splitLines;
    setSections(updatedSections);

    console.log(sections);
  };

  const [optionsVisible, setOptionsVisible] = useState(false);

 

  return (
    <div
      className={`section fade-in ${isSelected} ${notSelected}`}
      onClick={onClick}
    >
      <div className="section-type-wrap">
        <h2 className="section-type chosen">Verse</h2>
        
      </div>
      <div
        placeholder="Start typing.."
        className="input-container"
        contentEditable={!section.locked && true}
        onInput={(e) => {
          console.log(e.target.innerText);
        }}
      >
        {lines.map((line) => (
          <p>{line}</p>
        ))}
      </div>
    </div>
  );
};
