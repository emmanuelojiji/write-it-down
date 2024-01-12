import "./Editor.scss";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import { sectionsData } from "./sectionsData";
import { Helper } from "./Helper";
import { Button } from "./Button";
import Header from "./Header";
import { Tag } from "./Tag";

const Editor = () => {
  const [sections, setSections] = useState(sectionsData);
  const [helperVisible, setHelperVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState("default");

  useEffect(() => {
    console.log("length: " + sections.length);
  }, [sections]);

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

    setSelectedSection(sections.length - 0);
  };

  console.log(sections);
  return (
    <div className="editor">
      <Header />

      <main className="editor-main">
        <div className="editor-main-left">
          <div className="editor-main-left-content">
            <div className="project-header">
              <div className="project-header-left">
                <div className="title-status-wrap">
                  <h1
                    className="project-title"
                    contentEditable
                    placeholder="Untitled"
                  >
                    The A team
                  </h1>
                </div>
                <p className="date">Started 3 days ago</p>
                <div className="genre-container">
                  <Tag text="Alternative" />
                  <Tag text="Pop" />
                  <Tag text="Indie" />
                </div>
              </div>
              {/*<Button
              text="Add New Section"
              onClick={() => handleAddNewSection()}
              shake={helperVisible && "shake"}
  />*/}
            </div>
            {sections.map((section, index) => (
              <Section
                index={index}
                onClick={() => {
                  setHelperVisible(true);
                  console.log(index);
                  setSelectedSection(index);
                }}
                isSelected={selectedSection === index && "selected"}
                notSelected={
                  selectedSection != "default" &&
                  selectedSection != index &&
                  "not-selected"
                }
                lines={section.lines}
                section={section}
                sections={sections}
                setSections={setSections}
              />
            ))}
          </div>
        </div>
        <Helper
          helperVisible={helperVisible}
          setHelperVisible={setHelperVisible}
          sections={sections}
          setSections={setSections}
          selectedSection={selectedSection}
        />
      </main>
    </div>
  );
};

export default Editor;
