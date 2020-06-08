import React, { Component} from 'react';
import ProjectBox from './ProjectBox';
import r1 from '../img/slackproject.png';
import r2 from '../img/dicegame.png'
import ScrollContainer from 'react-indiana-drag-scroll';

class Work extends Component {
  
  state = {
    projects: [
    {
      title: "Slack Clone",
      pic: r1, type: "React",
      text: "A group project to recreate the look and feel of the Slack chat application",
      liveLink: "https://jinxbunny.github.io/group_slack/",
      gitLink: "https://github.com/jinxbunny/group_slack"
    },
    {
      title: "Dice Game", 
      pic: r2, type: "JS DOM",
      text: "Mini game project using Javascript, HTML and CSS",
      liveLink: "#",
      gitLink: "https://github.com/jinxbunny/dicegame"
    },
    {
      title: "Cyber Pet",
      pic: r1, type: "JS DOM",
      text: "A group project to recreate the look and feel of the Slack chat application",
      liveLink: "#",
      gitLink: "#"
    },
  ]
  }

    render (){
      let allProjects = this.state.projects.map((project, index) => {
        return <ProjectBox key = {index} title = {project.title} pic = {project.pic} type = {project.type} text = {project.text} liveLink = {project.liveLink} gitLink = {project.gitLink}/>
      })
        return (
        <div className="AppHeader">
          <h1>Projects</h1>
          <ScrollContainer className="swipeContainer">
          <div id="projectBox">{allProjects}</div>
          </ScrollContainer>
        </div>
      );
    }
}

export default Work;
