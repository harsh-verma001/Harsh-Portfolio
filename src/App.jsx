import "bootstrap/dist/css/bootstrap.min.css";
// import frontendImage from "./assets/frontend/htmlcss.jpeg";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const ProjectCardContent = [
    {
      imageUrl: "background/Amazon.webp",
      text: "hi this is harsh kumar verma.",
    },
    {
      imageUrl: "background/spotify2.png",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "background/weather2.jpg",
      text: "hi this is harsh kumar verma",
    },
    {
      imageUrl: "background/calculator.jpg",
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
      imageUrl: "frontend/htmlcss.jpeg",
      text: "HTML CSS",
    },
    {
      imageUrl: "frontend/bootstrap.jpeg",
      text: "Bootstrap",
    },
    {
      imageUrl: "frontend/js.png",
      text: "JavaScript",
    },
    {
      imageUrl: "frontend/react.webp",
      text: "React",
    },
  ];

  const backEndSkills = [
    {
      imageUrl: "backend/mysql2.png",
      text: "MySQL",
    },
    {
      imageUrl: "backend/springboot2.jpg",
      text: "Spring Boot",
    },
    {
      imageUrl: "backend/java.webp",
      text: "Java",
    },
  ];

  const educationContent = [
    {
      heading: "MCA",
      text: "AKGEC, Ghaziabad",
      grades: "74.30%",
      year: "2022-24",
    },
    {
      heading: "B.Sc",
      text: "K.D.College, Simbhaoli",
      grades: "66.50%",
      year: "2019-22",
    },
    {
      heading: "Intermediate",
      text: "K M LAL S V M I C Garh, Hapur",
      grades: "74%",
      year: "2019",
    },
  ];

  return (
    <>
      <Sidebar></Sidebar>
      {/* <div className="sidebar"></div> */}
      <div className="main-content">
        <Nav></Nav>
        <h4 style={{ margin: "20px 0" }}>Education</h4>
        <div className="education">
          {educationContent.map((item, index) => (
            <Education
              key={index}
              heading={item.heading}
              text={item.text}
              grades={item.grades}
              year={item.year}
            />
          ))}
        </div>

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
          <h4>Front-end</h4>
          <div className="frontEnd">
            {frontEndSkills.map((item, index) => (
              <Skills key={index} imageUrl={item.imageUrl} text={item.text} />
            ))}
          </div>
        </div>

        <div>
          <h4>Back-end</h4>
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
