import React, { useState } from "react";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>Here are some of my recent works.</p>
      <div className="project-grid">
        <div
          className={`project-box ${expandedProject === "magic" ? "expanded" : ""}`}
          onClick={() => toggleProject("magic")}
        >
          <h3>Magic the Gathering</h3>
          {expandedProject === "magic" && (
            <div className="project-details">
              <p>This is a card game project where I built a deck builder app.</p>
              <img src={`${process.env.PUBLIC_URL}/img/mtg.png`} alt="mtg logo" />
              <br></br>
              <a
                href="https://github.com/FluffinPuffin/MTGProject"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>

        <div
          className={`project-box ${expandedProject === "cms" ? "expanded" : ""}`}
          onClick={() => toggleProject("cms")}
        >
          <h3>CMS System</h3>
          {expandedProject === "cms" && (
            <div className="project-details">
              <p>A content management system for managing blogs and articles.</p>
              <img src={`${process.env.PUBLIC_URL}/img/insta.png`} alt="instagram logo" />
              <br></br>
              <a
                href="https://github.com/FluffinPuffin/dig3134/tree/main/assignment06"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>

        <div
          className={`project-box ${expandedProject === "sorting" ? "expanded" : ""}`}
          onClick={() => toggleProject("sorting")}
        >
          <h3>Sorting Library</h3>
          {expandedProject === "sorting" && (
            <div className="project-details">
              <br></br>
              <p>A library that implements various sorting algorithms.</p>
              <br></br>
              <img src={`${process.env.PUBLIC_URL}/img/c.png`} alt="c logo" />
              <br></br>
              <a
                href="https://github.com/FluffinPuffin/cop3330/tree/main/assignment03"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;