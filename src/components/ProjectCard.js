import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './ProjectCard.css';

const ProjectCard = ({ title, pic, techStack, summery, info, liveLink, gitLink, tools }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (

        <div id="cardSetup">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div id="cardFront" onClick={handleClick} className="pBContainer">
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
                    </div>
                    <div>
                        <p id="pre">Tech stack includes..</p>
                        <p id="summery">{summery}</p>
                        <p id="tap">tap for more info..</p>
                    </div>
                </div>
                <div id="cardBack" onClick={handleClick} className="pBContainer">
                    <div id="title">
                        {title}
                    </div>
                    <div>
                        <p id="projectInfo">{info}</p>
                        <p id="tools">{tools}</p>
                    </div>
                    <div id="projectLinks">
                        <div className="linkButtons">
                            <a href={liveLink} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> Live</a>
                        </div>
                        <div className="linkButtons">
                            <a href={gitLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github" ></i> Git Hub</a>
                        </div>
                    </div>
                </div>
            </ReactCardFlip>

        </div >
    )
}
export default ProjectCard