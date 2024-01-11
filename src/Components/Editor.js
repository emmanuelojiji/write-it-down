import "./Editor.scss";
import { useState } from "react";
import { Section } from "./Section";
import { sectionsData } from "./sectionsData";
import { Helper } from "./Helper";

const Editor = () => {
  const [projectTitle, setProjectTitle] = useState("My heartbreak song");
  const [sections, setSections] = useState(sectionsData);
  const [helperVisible, setHelperVisible] = useState(false);

  console.log(sections);
  return (
    <div className="editor">
      <Helper
        helperVisible={helperVisible}
        setHelperVisible={setHelperVisible}
      />
      <input
        type="text"
        className="project-title"
        defaultValue={projectTitle}
        maxLength="50"
        placeholder="Untitled"
      ></input>

      {sections.map((section, index) => (
        <Section
          index={index}
          onClick={() => setHelperVisible(true)}
          lines={section.lines}
          section={section}
          sections={sections}
          setSections={setSections}
        />
      ))}
    </div>
  );
};

export default Editor;
