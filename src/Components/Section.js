import "./Section.scss";
import { useEffect, useState } from "react";

export const Section = ({
  onClick,
  lines,
  sections,
  section,
  setSections,
  index,
}) => {
  const handleLineUpdate = (sectionIndex, newLines, text) => {
    const splitLines = text.split("\n");
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lines = splitLines;
    setSections(updatedSections);

    console.log(sections);
  };

  return (
    <div className="section" onClick={onClick}>
      <h2 className="section-type">Verse</h2>
      <div
        placeholder="Start typing.."
        className="input-container"
        contentEditable
        onInput={(e) => {
          console.log(e.target.innerText);
          handleLineUpdate(index, e.target.innerText, e.target.innerText);
        }}
      >
        {/*lines.map((line, index) => (
          <p
            key={index}
            onClick={(e) => {
              setCurrentLine(index);
              console.log(currentLine);
            }}
            contentEditable
            onInput={(e) => {
              setUpdatedLine(e.target.innerText);
              console.log(e.target.innerText);
              console.log("New Line:" + updatedLine);
            }}
          >
            {line}
          </p>
          ))*/}
      </div>
    </div>
  );
};
