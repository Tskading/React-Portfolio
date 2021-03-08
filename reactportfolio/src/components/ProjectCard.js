import React from "react";

function ProjectCard(props) {
    return (
        <div className="card">
            {console.log(props)}
  <img src={props.work.img} className="card-img-top" alt="Project Screenshot" style={{"width": "auto"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.work.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a target="_blank" rel="noreferrer" href={props.work.liveHref} className="btn btn-primary">Live Page</a>
    <a target="_blank" rel="noreferrer" href={props.work.hubHref} className="btn btn-primary">Github Page</a>
  </div>
</div>
    )
}

export default ProjectCard;