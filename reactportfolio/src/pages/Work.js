import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";

function Work () {
    const [project, setProject] = useState(projects)
    return (
        <>
            <h1>
                My Work
            </h1>
            <div className="row">
            {project.map(work => {
                return (
                    <div className="col-sm-4">
                        <ProjectCard work={work} />
                    </div>
                )
            })}
          </div>
        </>
    )
}
export default Work;