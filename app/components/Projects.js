import React from 'react';

import projects from '../projectInfo';

export default function(props) {
  return (
    <div className="container">
      <div className="row">
      {
        projects.map((project, idx) => {
          return (
                <div key={project.id} className="card col-lg-4 col-md-6 col-sm-12">
                  <h2>{project.name}</h2>
                    <br />
                  {project.date}
                    <br />
                  <em>{project.position}</em>
                    <br />
                  Built with {project.technologies}
                    <br />
                    <br />
                  <p>{project.description}</p>
                </div>
          );
        })
      }
      </div>
    </div>
  );
}

