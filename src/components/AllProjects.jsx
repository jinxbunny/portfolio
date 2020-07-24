import React from "react";
//project thumbnails
import r1 from "../img/slackproject.png";
import r2 from "../img/dicegame.png";
import r3 from "../img/cyberpet.png";
import r4 from "../img/adventurebot.png";
import a from "../img/anchor.png";
import c from "../img/cage.png";

//techstack imgs
import github from "../img/techstack/github.png";
import html5 from "../img/techstack/html5.png";
import javascript from "../img/techstack/javascript.jpg";
import node from "../img/techstack/node.png";
import npm from "../img/techstack/npm.png";
import css from "../img/techstack/css.png";
import react from "../img/techstack/react.png";
import vsc from "../img/techstack/vsc.png";
import trello from "../img/techstack/trello.jpg";
import googlefonts from "../img/techstack/googlefonts.jpg";
import heroku from "../img/techstack/heroku.png";
import ex from "../img/techstack/express.png";
import mongo from "../img/techstack/mongo.png";
import python from "../img/techstack/python.png";
import django from "../img/techstack/django.png";
import sql from "../img/techstack/sql.png";

const AllProjects = [
  {
    id: 0,
    title: "Anchor",
    pic: a,
    techStack: [
      <img src={mongo} alt="Mongo"></img>,
      <img src={ex} alt="Express"></img>,
      <img src={react} alt="React"></img>,
      <img src={node} alt="Node"></img>,
      <img src={css} alt="CSS"></img>,
    ],
    summery: "Mongo, Express, React and Node",
    info:
      "Anchor is a concept App utilising a chat bot to help keep a diary of symptoms during the covid pandemic",
    liveLink: "https://cn-cage-anchor.herokuapp.com/",
    gitLink: "https://github.com/CNcage/anchor",
    tools: [
      <img src={vsc} alt="Visual Studio Code"></img>,
      <img src={npm} alt="NPM"></img>,
      <img src={heroku} alt="Heroku"></img>,
      <img src={github} alt="GitHub"></img>,
      <img src={trello} alt="Trello"></img>,
    ],
  },
  {
    id: 1,
    title: "Cage",
    pic: c,
    techStack: [
      <img src={python} alt="React"></img>,
      <img src={django} alt="Django"></img>,
      <img src={sql} alt="SQL"></img>,
      <img src={css} alt="CSS"></img>,
    ],
    summery: "React JavaScript and CSS",
    info:
      "Python / Django Project, A database of cryptids accessed and displayed as SCP files ",
    liveLink: "https://agile-shore-66300.herokuapp.com/accounts/login/",
    gitLink: "https://github.com/AndreCamm/djangoproject",
    tools: [
      <img src={vsc} alt="Visual Studio Code"></img>,
      <img src={npm} alt="NPM"></img>,
      <img src={heroku} alt="Heroku"></img>,
      <img src={github} alt="GitHub"></img>,
      <img src={trello} alt="Trello"></img>,
    ],
  },
  {
    id: 2,
    title: "Slack Clone",
    pic: r1,
    techStack: [
      <img src={react} alt="React"></img>,
      <img src={javascript} alt="javascript"></img>,
      <img src={css} alt="CSS"></img>,
    ],
    summery: "React JavaScript and CSS",
    info:
      "A recreatetion of the look and feel of the Slack application using React",
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
    id: 3,
    title: "Cyber Pet",
    pic: r3,
    techStack: [
      <img src={html5} alt="HTML5"></img>,
      <img src={javascript} alt="javascript"></img>,
      <img src={css} alt="CSS"></img>,
    ],
    summery: "HTML5 JavaScript and CSS",
    info: "A Javascript Dom project based on a cyber pet game",
    liveLink: "https://jinxbunny.github.io/cyberpet/",
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
    id: 4,
    title: "Dice Game",
    pic: r2,
    techStack: [
      <img src={html5} alt="HTML5"></img>,
      <img src={javascript} alt="javascript"></img>,
      <img src={css} alt="CSS"></img>,
    ],
    summery: "HTML5 JavaScript and CSS",
    info:
      "Mini JavaScript project, the goal is to roll more than 20, however if you roll a 1 you loose",
    liveLink: "https://jinxbunny.github.io/dicegame/",
    gitLink: "https://github.com/jinxbunny/dicegame",
    tools: [
      <img src={vsc} alt="Visual Studio Code"></img>,
      <img src={npm} alt="NPM"></img>,
      <img src={github} alt="GitHub"></img>,
      <img src={googlefonts} alt="Google Fonts"></img>,
      <img src={trello} alt="Trello"></img>,
    ],
  },
  // {
  //   id: 5,
  //   title: "Adventure Bot",
  //   pic: r4,
  //   techStack: [
  //     <img src={react} alt="React"></img>,
  //     <img src={javascript} alt="javascript"></img>,
  //     <img src={css} alt="CSS"></img>,
  //   ],
  //   summery: "React JavaScript and CSS",
  //   info:
  //     "A 'choose your adventure' chatbot using React Simple Chatbot package",
  //   liveLink: "#",
  //   gitLink: "https://github.com/jinxbunny/adventurebot.git",
  //   tools: [
  //     <img src={vsc} alt="Visual Studio Code"></img>,
  //     <img src={npm} alt="NPM"></img>,
  //     <img src={github} alt="GitHub"></img>,
  //     <img src={googlefonts} alt="Google Fonts"></img>,
  //     <img src={trello} alt="Trello"></img>,
  //   ],
  // },
];

export default AllProjects;
