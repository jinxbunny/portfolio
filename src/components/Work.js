import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import './Work.css';

//img 
import r1 from '../img/slackproject.png';
import r2 from '../img/dicegame.png';
import d from '../img/default.png';

//techstack imgs
import git from '../img/techstack/git.png'
import github from '../img/techstack/github.png'
import html5 from '../img/techstack/html5.png'
import javascript from '../img/techstack/javascript.jpg'
import node from '../img/techstack/node.png'
import npm from '../img/techstack/npm.png'
import css from '../img/techstack/css.png'
import react from '../img/techstack/react.png'
import vsc from '../img/techstack/vsc.png'
import trello from '../img/techstack/trello.jpg'
import googlefonts from '../img/techstack/googlefonts.jpg'

class Work extends Component {

  state = {
    projects: [
      {
        title: "Slack Clone",
        pic: r1,
        techStack: [
          <img src={react} alt="React"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        info: "A group project to recreate the look and feel of the Slack application using React, A group project to recreate the look and feel of the Slack application using React, A group project to recreate the look and feel of the Slack application using React, ",
        liveLink: "https://jinxbunny.github.io/group_slack/",
        gitLink: "https://github.com/jinxbunny/group_slack",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
          <img src={trello} alt="Trello"></img>,
        ],
      },
      {
        title: "Adventure Bot",
        pic: d,
        techStack: [
          <img src={react} alt="React"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        info: "A 'choose your adventure' chatbot",
        liveLink: "#",
        gitLink: "https://github.com/jinxbunny/chatbot",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
          <img src={googlefonts} alt="Google Fonts"></img>,
          <img src={trello} alt="Trello"></img>,
        ],
      },
      {
        title: "Dice Game",
        pic: r2,
        techStack: [
          <img src={html5} alt="HTML5"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        info: "Mini game project using Javascript, HTML and CSS",
        liveLink: "#",
        gitLink: "https://github.com/jinxbunny/dicegame"
      },
      {
        title: "Cyber Pet",
        pic: d,
        techStack: [
          <img src={html5} alt="HTML5"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        info: "A group project to recreate the look and feel of the Slack chat application",
        liveLink: "#",
        gitLink: "#"
      },
      {
        title: "Project1",
        pic: d, techStack: "???",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium facilis minima!",
        liveLink: "#",
        gitLink: "#"
      },
      {
        title: "Project2",
        pic: d, techStack: "???",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium facilis minima!",
        liveLink: "#",
        gitLink: "#"
      },
    ]
  }

  render() {
    let allProjects = this.state.projects.map((project, index) => {
      return <ProjectCard key={index} title={project.title} pic={project.pic} techStack={project.techStack} info={project.info} liveLink={project.liveLink} gitLink={project.gitLink} tools={project.tools} />
    })
    return (
      <div>
        <div className="AppHeader">
          <div className="fadeIn">
            <h2>Code Nation Projects</h2>
            <br></br>
            <ScrollContainer className="swipeContainer">
              <div id="projectBox">{allProjects}</div>
            </ScrollContainer>
            <div id="aboutProjects"> &lt; drag to view more &gt;</div>
          </div>
        </div>
      </div >
    );
  }
}

export default Work;
