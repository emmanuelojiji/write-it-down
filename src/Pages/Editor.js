import "./Editor.scss";
import { useState } from "react";
import { Section } from "../Components/Section";
import { sectionsData } from "../Components/sectionsData";
import { Helper } from "../Components/Helper";
import { Button } from "../Components/Button";
import Header from "../Components/Header";
import { Tag } from "../Components/Tag";
import { projectsData } from "../projectsData";
import { useParams } from "react-router-dom";
export const Editor = () => {
  const [sections, setSections] = useState(sectionsData);
  const [helperVisible, setHelperVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState("default");

  const { id } = useParams();

  const project = projectsData.find((project) => project.id === id);

  const [user, setUser] = useState(true);

  const handleAddNewSection = () => {
    console.log("new section");
    setSections([
      ...sections,
      {
        type: "verse",
        lines: [],
        notes: [],
        locked: false,
      },
    ]);

    setSelectedSection(sections.length - 0);
  };

  console.log(sections);
  return (
    <div className="editor">
      <Header user={user} />

      <main className="editor-main">
        <div className="editor-main-left">
          <div
            className={`editor-main-left-content ${helperVisible && "shake"}`}
          >
            <div className="project-header">
              <div className="project-header-left">
                <div className="title-status-wrap">
                  <h1
                    className="project-title"
                    contentEditable
                    placeholder="Untitled"
                  >
                    {project.title}
                  </h1>
                </div>
                <p className="date">Started 3 days ago</p>
                <div className="genre-container">
                  {project.genre.map((genre) => (
                    <Tag text={genre} />
                  ))}
                </div>
              </div>
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
