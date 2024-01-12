import { ProjectCard } from "../Components/ProjectCard";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div className="projects">
      <main className="projects-main">
        <h2>Your Projects</h2>
        <p>Create a new project or continue where you left off</p>

        <div className="project-card-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>
    </div>
  );
};
