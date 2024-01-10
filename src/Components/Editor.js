import "./Editor.scss";
import { useState } from "react";
import { Section } from "./Section";

const Editor = () => {
  const [projectTitle, setProjectTitle] = useState("My heartbreak song");
  return (
    <div className="editor">
      <input
        type="text"
        className="project-title"
        defaultValue={projectTitle}
        maxLength="50"
        placeholder="Untitled"
      ></input>

      <Section/>
    </div>
  );
};

export default Editor;
