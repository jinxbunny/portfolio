import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollContainer from "react-indiana-drag-scroll";
import Jmkit from "./Jmkit";

import AllProjects from "./AllProjects";

import "./Work.css";
//img
import dragPic from "../img/drag-left.gif";

function createCard(project, i) {
  return (
    <ProjectCard
      key={i}
      title={project.title}
      pic={project.pic}
      techStack={project.techStack}
      info={project.info}
      liveLink={project.liveLink}
      gitLink={project.gitLink}
      tools={project.tools}
      summery={project.summery}
    />
  );
}

const Work = () => {
  return (
    <div>
      <div className="AppHeader">
        <div className="workParent">
          <div className="fadeIn">
            <h2>Recent Projects</h2>
            <br></br>
            <ScrollContainer className="swipeContainer">
              <div id="projectBox">{AllProjects.map(createCard)}</div>
            </ScrollContainer>
            <div id="aboutProjects">
              <div id="dragIcon">
                <img className="dragPic" src={dragPic} alt="Drag to see more" />
              </div>
            </div>
            <Jmkit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
