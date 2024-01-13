import { useState } from "react";
import { Button } from "../Components/Button";
import Header from "../Components/Header";
import { ProjectCard } from "../Components/ProjectCard";
import { projectsData } from "../projectsData";
import "./Projects.scss";

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState();

  return (
    <div className="projects">
      <Header />
      <main className="projects-main">
        <div className="projects-main-header">
          <div>
            <h2 className="projects-main-heading">Your Projects</h2>
            <p className="projects-main-desc">
              Create a new project or continue where you left off
            </p>
          </div>
          <Button text="Create New Project" />
        </div>

        <div className="project-card-container">
          {projectsData.map((project) => (
            <ProjectCard
              id={project.id}
              title={project.title}
              projectStatus={project.status}
              desc={project.desc}
              hoveredProject={project.title}
              
            />
          ))}
        </div>
      </main>
    </div>
  );
};
