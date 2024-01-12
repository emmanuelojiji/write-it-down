import { ProjectCard } from "../Components/ProjectCard";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <main className="projects-main">
        <h2 className="projects-main-heading">Your Projects</h2>
        <p className="projects-main-desc">Create a new project or continue where you left off</p>

        <div className="project-card-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
    </div>
  );
};
