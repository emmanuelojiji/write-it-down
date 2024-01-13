import "./ProjectCard.scss";
import { genres } from "../projectsData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";


export const ProjectCard = ({ title, desc, id,}) => {

  const [showContinue, setShowContinue] = useState(false)

  return (
    <Link to={`/editor/${id}`}>
      <div className={`project-card`}>
        <div className="gradient-box">
          <Button text="Continue"/>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
};
