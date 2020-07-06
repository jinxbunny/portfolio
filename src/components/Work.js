import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import './Work.css';

//img 
import r1 from '../img/slackproject.png';
import r2 from '../img/dicegame.png';
import r3 from '../img/cyberpet.png';
import r4 from '../img/adventurebot.png';
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
        summery: "React Javascript and CSS",
        info: "A group project to recreate the look and feel of the Slack application using React",
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
        title: "Cyber Pet",
        pic: r3,
        techStack: [
          <img src={html5} alt="HTML5"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        summery: "HTML5 Javascript and CSS",
        info: "Originally created with Javascript, an Oop project turned into a JS Dom project",
        liveLink: "#",
        gitLink: "https://github.com/jinxbunny/cyberpet",
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
        summery: "HTML5 Javascript and CSS",
        info: "Mini game project using Javascript, HTML and CSS",
        liveLink: "#",
        gitLink: "https://github.com/jinxbunny/dicegame",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
          <img src={googlefonts} alt="Google Fonts"></img>,
          <img src={trello} alt="Trello"></img>,
        ],
      },

      {
        title: "Adventure Bot",
        pic: r4,
        techStack: [
          <img src={react} alt="React"></img>,
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        summery: "React Javascript and CSS",
        info: "A 'choose your adventure' chatbot using React Simple Chatbot package",
        liveLink: "#",
        gitLink: "https://github.com/jinxbunny/adventurebot.git",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
          <img src={googlefonts} alt="Google Fonts"></img>,
          <img src={trello} alt="Trello"></img>,
        ],
      },
      {
        title: "Project1",
        pic: d,
        techStack: [
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        summery: "info soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium facilis minima!",
        liveLink: "#",
        gitLink: "#",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
        ],
      },
      {
        title: "Project2",
        pic: d,
        techStack: [
          <img src={javascript} alt="javascript"></img>,
          <img src={css} alt="CSS" ></img>
        ],
        summery: "info soon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium facilis minima!",
        liveLink: "#",
        gitLink: "#",
        tools: [
          <img src={vsc} alt="Visual Studio Code"></img>,
          <img src={npm} alt="NPM"></img>,
          <img src={github} alt="GitHub"></img>,
        ],
      },
    ]
  }

  render() {
    let allProjects = this.state.projects.map((project, index) => {
      return <ProjectCard key={index} title={project.title} pic={project.pic} techStack={project.techStack} info={project.info} liveLink={project.liveLink} gitLink={project.gitLink} tools={project.tools} summery={project.summery} />
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
