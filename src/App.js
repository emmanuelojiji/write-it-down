import "./App.scss";
import { Editor } from "./Pages/Editor";
import Header from "./Components/Header";
import { Authentication } from "./Pages/Authentication";
import { Projects } from "./Pages/Projects";

function App() {
  return (
    <div className="App">
    
     <Header/>
      <Projects/>
    </div>
  );
}

export default App;
