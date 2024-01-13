import "./ProjectCard.scss";
import { genres } from "../projectsData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";

export const ProjectCard = ({ title, desc, id, projectStatus, view }) => {
  return (
    <Link to={`/editor/${id}`} className="project-card-link">
      {view === "card" ? (
        <div className={`project-card`}>
          <div className="gradient-box">
            <div className="project-status">{projectStatus}</div>
            <Button text="Continue" />
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ) : (
        <div className={`project-card`}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      )}
    </Link>
  );
};
