import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar></Sidebar>
      {/* <div className="sidebar"></div> */}
      <div className="main-content">
        <Nav></Nav>
        <div class="super-container">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </div>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
