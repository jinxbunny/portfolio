import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ title, pic, techStack, info, liveLink, gitLink, tools }) => {
    return (

        <div>
            <div id="pBContainer">
                <div id="title">
                    {title}
                </div>
                <div id="imageframe">
                    <div id="image">
                        <img id="pic" src={pic} alt="user pic" />
                    </div>
                </div>
                <div>
                    <p id="techStack">{techStack}</p>
                    <p id="projectInfo">{info}</p>
                    <p id="tools">{tools}</p>
                </div>
                <div id="cardLinks">
                    <div className="linkButtons">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> Live</a>
                    </div>
                    <div className="linkButtons">
                        <a href={gitLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" ></i> Git Hub</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ProjectCard