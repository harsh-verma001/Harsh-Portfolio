import "bootstrap/dist/css/bootstrap.min.css";
// import frontendImage from "./assets/frontend/htmlcss.jpeg";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const ProjectCardContent = [
    {
      imageUrl: "../public/frontend/react.png",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium consectetur aliquam quia minima impedit repellat laboriosam corporis, in corrupti ad maiores ut placeat eaque est inventore quaerat alias quidem earum debitis. Accusantium similique illo velit deleniti perferendis placeat magnam nisi perspiciatis nemo ex. Repellat animi deleniti reprehenderit numquam fugit explicabo.",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "hi this is harsh kumar verma",
    },
  ];

  const frontEndSkills = [
    {
      imageUrl: "../public/frontend/htmlcss.jpeg",
      text: "HTML CSS",
    },
    {
      imageUrl: "../public/frontend/bootstrap.jpeg",
      text: "Bootstrap",
    },
    {
      imageUrl: "../public/frontend/js.png",
      text: "JavaScript",
    },
    {
      imageUrl: "../public/frontend/react.webp",
      text: "React",
    },
  ];

  const backEndSkills = [
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "HTML CSS",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "Bootstrap",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "JavaScript",
    },
    {
      imageUrl: "https://via.placeholder.com/50x50.png?text=H",
      text: "React",
    },
  ];

  return (
    <>
      <Sidebar></Sidebar>
      {/* <div className="sidebar"></div> */}
      <div className="main-content">
        <Nav></Nav>
        <h4 style={{ margin: "20px 0" }}>Projects</h4>
        <div class="super-container">
          {ProjectCardContent.map((item, index) => (
            <ProjectCard
              key={index}
              imageUrl={item.imageUrl}
              text={item.text}
            />
          ))}
        </div>
        <div>
          <h4>front-end</h4>
          <div className="frontEnd">
            {frontEndSkills.map((item, index) => (
              <Skills key={index} imageUrl={item.imageUrl} text={item.text} />
            ))}
          </div>
        </div>

        <div>
          <h4>back-end</h4>
          <div className="backEnd">
            {backEndSkills.map((item, index) => (
              <Skills key={index} imageUrl={item.imageUrl} text={item.text} />
            ))}
          </div>
        </div>

        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
