import "./Editor.scss";
import { useState } from "react";
import { Section } from "./Section";
import { sectionsData } from "./sectionsData";

const Editor = () => {
  const [projectTitle, setProjectTitle] = useState("My heartbreak song");
  const [sections, setSections] = useState(sectionsData);
  return (
    <div className="editor">
      <input
        type="text"
        className="project-title"
        defaultValue={projectTitle}
        maxLength="50"
        placeholder="Untitled"
      ></input>

      {sections.map((section) => (
        <Section lines={section.lines} />
      ))}
    </div>
  );
};

export default Editor;
