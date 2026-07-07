import React from 'react';
import "../css/All.css"

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="intro-text">
        <p>
          Hi, I'm <strong>Zhang Yufei</strong> (张语菲), a researcher and developer 
          passionate about technology and design. Currently, I'm pursuing my studies 
          at <strong>Peking University</strong>.
        </p>
        
        <p>
          My research interests include human-computer interaction, software engineering, 
          and exploring innovative ways to make technology more accessible and user-friendly.
        </p>

        <div className="callout">
          <p>
            I'm always open to collaboration and new opportunities. 
            Feel free to reach out if you're interested in working together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
