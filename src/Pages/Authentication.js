import "./Authentication.scss";
import { useState } from "react";
import { FormInput } from "../Components/FormInput";
import { Button } from "../Components/Button";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export const Authentication = () => {
  const [view, setView] = useState("login");
  return (
    <div className="authentication">
      <Header />

      <main className="authentication-main">
        <h2 className="authentication-heading">Welcome Back</h2>
        <FormInput placeholder="Email Address" />
        <FormInput placeholder="Password" />
        <Link to="/projects">
          <Button text="Continue creating" />
        </Link>
      </main>
    </div>
  );
};
