import "./Section.scss";
import { useState } from "react";

export const Section = ({ lines }) => {
  const [sectionType, setSectionType] = useState("");
  return (
    <div className="section">
      <h2 className="section-type">Verse</h2>
      <div placeholder="Start typing.." className="lines-input" contentEditable>
        {lines.map((line) => (
          <p>{line}</p>
        ))}
      </div>
    </div>
  );
};
