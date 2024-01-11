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

  return (
    <div
      className={`section fade-in ${isSelected} ${notSelected}`}
      onClick={onClick}
    >
      <h2 className="section-type">Verse</h2>
      <div
        placeholder="Start typing.."
        className="input-container"
        contentEditable={!section.locked && true}
        onInput={(e) => {
          console.log(e.target.innerText);
          handleLineUpdate(index, e.target.innerText);
        }}
      >
        {lines.map((line) => (
          <p className="line">{line}</p>
        ))}
      </div>
    </div>
  );
};
