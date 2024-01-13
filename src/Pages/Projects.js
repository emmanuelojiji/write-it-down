import { useState } from "react";
import { Button } from "../Components/Button";
import Header from "../Components/Header";
import { ProjectCard } from "../Components/ProjectCard";
import { projectsData } from "../projectsData";
import "./Projects.scss";

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState();
  const [user, setUser] = useState(true);

  const [view, setView] = useState("card");

  return (
    <div className="projects">
      <Header user={user} />
      <main className="projects-main">
        <div className="projects-main-header">
          <div>
            <h2 className="projects-main-heading">Your Projects</h2>
            <p className="projects-main-desc">
              Create a new project or continue where you left off
            </p>
          </div>
          <div>
            <button className="view-toggle" onClick={() => setView(view === "card" ? "list" : "card")}>
              List view
            </button>
            <Button text="Create New Project" />
          </div>
        </div>

        <div
          className={`project-card-container ${
            view === "card" ? "card-view" : "list-vew"
          }`}
        >
          {projectsData.map((project) => (
            <ProjectCard
              id={project.id}
              title={project.title}
              projectStatus={project.status}
              desc={project.desc}
              hoveredProject={project.title}
              view={view}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
