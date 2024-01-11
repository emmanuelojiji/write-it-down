import "./Section.scss";
import { useEffect, useState } from "react";

export const Section = ({ onClick, lines, sections, section, setSections }) => {
  const [sectionType, setSectionType] = useState("");
  const [currentLine, setCurrentLine] = useState(null);

  const [updatedLine, setUpdatedLine] = useState();

  useEffect(() => {
    console.log(currentLine);
  }, [currentLine]);

  return (
    <div className="section" onClick={onClick}>
      <h2 className="section-type">Verse</h2>
      <div placeholder="Start typing.." className="lines-input">
        {lines.map((line, index) => (
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
        ))}
      </div>
    </div>
  );
};
