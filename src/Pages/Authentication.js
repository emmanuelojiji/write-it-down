import "./Authentication.scss"
import { useState } from "react";
import { FormInput } from "../Components/FormInput";
import { Button } from "../Components/Button";
import Header from "../Components/Header";

export const Authentication = () => {
  const [view, setView] = useState("login");
  return (
    <div className="authentication">
      <Header />

      <main className="authentication-main">
        <h2>Welcome Back</h2>
        <FormInput placeholder="Email Address"/>
        <FormInput placeholder="Password"/>
        <Button text="Continue creating"/>
      </main>
    </div>
  );
};
