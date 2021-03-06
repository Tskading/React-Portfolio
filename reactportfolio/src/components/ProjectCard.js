import React from "react";

function ProjectCard(props) {
    return (
        <div class="card">
            {console.log(props)};
  <img src={props.work.img} className="card-img-top" alt="SongBirdie Logo" style={{"width": "18rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{props.work.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default ProjectCard;