import React from 'react';

import projects from '../data/projectInfo';

export default function(props) {
  return (
    <div className="container">
      <div className="row">
      {
        projects.map((project, idx) => {
          return (
            <div key={project.id} className="card projCard col-lg-4 col-md-6 col-sm-12">
              <h2>{project.name}</h2>
                <br />
              {
                project.youtube || project.github || project.site
                  ? <div className="row iconRow">
                      {
                        project.youtube &&
                          <div className="icon">
                            <a href={project.youtube}>
                              <img src="/images/youtube.png"/>
                            </a>
                          </div>
                      }
                      {
                        project.site &&
                          <div className="icon">
                            <a href={project.site}>
                              <img src="/images/earth.png"/>
                            </a>
                          </div>
                      }
                      {
                        project.github &&
                          <div className="icon">
                            <a href={project.github}>
                              <img src="/images/github.png"/>
                            </a>
                          </div>
                      }
                    </div>
                  : null
              }
                <br />
              <div className="info">
                {project.date}
                  <br />
                <h4><em>{project.position}</em></h4>
                  <br />
                Built with {project.technologies}
                  <br />
                  <br />
              </div>
              <p>{project.description}</p>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
