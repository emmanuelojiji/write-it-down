import "./App.scss";
import { Editor } from "./Pages/Editor";
import Header from "./Components/Header";
import { Authentication } from "./Pages/Authentication";
import { Projects } from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/editor/:id" element={<Editor />} />
    </Routes>
  );
}

export default App;
