import "./ProjectCard.scss";
import { genres } from "../projectsData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, desc, id }) => {
  return (
    <Link to={`/editor/${id}`}>
      <div className="project-card">
        <div className="gradient-box"></div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
};
