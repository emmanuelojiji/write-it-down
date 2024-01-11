import "./Editor.scss";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import { sectionsData } from "./sectionsData";
import { Helper } from "./Helper";
import { Button } from "./Button";

const Editor = () => {
  const [projectTitle, setProjectTitle] = useState("My heartbreak song");
  const [sections, setSections] = useState(sectionsData);
  const [helperVisible, setHelperVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState();

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
        <div className="project-header-left">
          <div className="title-status-wrap">
            <h1
              className="project-title"
              contentEditable
              placeholder="Untitled"
            >
              My Heartbreak Song
            </h1>
            <div className="project-status">Unfinished</div>
          </div>
          <p className="date">Started 3 days ago</p>
        </div>
        <Button text="Add New Section" onClick={() => handleAddNewSection()} />
      </div>
      {sections.map((section, index) => (
        <Section
          index={index}
          onClick={() => {
            setHelperVisible(true);
            console.log(index);
            setSelectedSection(index)
          }}
          isSelected={selectedSection === index && "selected"}
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
