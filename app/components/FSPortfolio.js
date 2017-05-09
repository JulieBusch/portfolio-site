import React from 'react';

import projects from '../fs-portfolio';

export default function(props) {
  return (
    <div>
      <div className="home container">
        <p>
          You've happened upon the portfolio of work I've put together for my application to be an instructor! You stand before it like Indiana Jones stood before the golden idol, knowing you are among the rare few who have beheld this sight! But what dangers are yet to come?
            <br />
            <br />
          (None. None are yet to come. I thought it would not behoove me to boobytrap this page with an attack of some sort just so that I can continue this Raiders of the Lost Ark reference with a remark about a large rolling boulder.)
        </p>
      </div>
        <br />
        <br />
      <div className="container">
        <div className="row">
        {
          projects.map((project, idx) => {
            return (
              <div key={project.id} className="card col-lg-4 col-md-6 col-sm-12">
                <h2>{project.name}</h2>
                  <br />
                {
                  project.youtube || project.github || project.site
                    ? <div className="row" style={{justifyContent: 'center'}}>
                        {
                          project.youtube &&
                            <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                              <a style={{width: '100%'}} href={project.youtube}>
                                <img style={{width: '100%'}} src="/images/youtube.png"/>
                              </a>
                            </div>
                        }
                        {
                          project.site &&
                            <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                              <a style={{width: '100%'}} href={project.site}>
                                <img style={{width: '100%'}} src="/images/earth.png"/>
                              </a>
                            </div>
                        }
                        {
                          project.github &&
                            <div style={{width: '20%', margin: '2%', display: 'flex', alignItems: 'center'}}>
                              <a style={{width: '100%'}} href={project.github}>
                                <img style={{width: '100%'}} src="/images/github.png"/>
                              </a>
                            </div>
                        }
                      </div>
                    : null
                }
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
    </div>
  );
}
