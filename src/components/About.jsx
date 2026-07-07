import React from 'react';
import "../css/All.css"

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="intro-text">
        <p>
          I'm a junior undergraduate student at <strong>Peking University</strong>, 
          passionate about exploring the intersection of technology and innovation.
        </p>
        
        <p>
          Since July 2025, I have been interning at the <strong>Wang Xuan Institute of Computer Science</strong> 
          under the supervision of <strong>Prof. Jiaying Liu</strong>. My research focuses on image restoration 
          and generation, including AI-driven image synthesis, deraining, and multi-task unified restoration.
        </p>

        <div className="callout">
          <p>
            I'm always open to collaboration and new opportunities.<br/>
            Feel free to reach out if you're interested in working together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
