import React from 'react';
import './ProjectBox.css';

const ProjectBox = (props) => {
    return (
        <div>
            <div id="pBContainer">
                <div id="title">
                    <p>{props.title}</p>
                    </div>
                <div id="image">
                    <img id="pic" src={props.pic} alt="user pic"/></div>
                <div>
                    <p id="type">{props.type}</p>
                    <p id="text">{props.text}</p>
                </div>
                <div id="cardLinks">
                    <span className="linkButtons">
                        <a href={props.liveLink}><i class="fas fa-globe"></i> Live</a>
                        </span>
                    <span className="linkButtons">
                        <a href={props.gitLink}><i class="fab fa-github" ></i> Git Hub</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default ProjectBox