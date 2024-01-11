import "./Editor.scss";
import { useState } from "react";
import { Section } from "./Section";
import { sectionsData } from "./sectionsData";
import { Helper } from "./Helper";

const Editor = () => {
  const [projectTitle, setProjectTitle] = useState("My heartbreak song");
  const [sections, setSections] = useState(sectionsData);
  const [helperVisible, setHelperVisible] = useState(false);

  const handleAddNewSection = () => {
    console.log("new section");
    setSections([
      ...sections,
      {
        type: "verse",
        lines: [],
        notes: [],
      },
    ]);
  };

  console.log(sections);
  return (
    <div className="editor">
      <Helper
        helperVisible={helperVisible}
        setHelperVisible={setHelperVisible}
      />
      <div className="project-header">
        <input
          type="text"
          className="project-title"
          defaultValue={projectTitle}
          maxLength="50"
          placeholder="Untitled"
        ></input>
        <div className="project-status">Unfinished</div>
      </div>
      <button onClick={() => handleAddNewSection()}>Add New Section</button>
      {sections.map((section, index) => (
        <Section
          index={index}
          onClick={() => {
            setHelperVisible(true);
            console.log(index);
          }}
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
