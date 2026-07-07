import React from 'react';
import "../css/All.css"

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="intro-text">
        <p>
          I am Yufei Zhang (张语菲), an undergraduate student in <strong>Informatics and Computation Science</strong>, <strong>School of Electrical Engineering and Computer Science (EECS)</strong>, <strong>Peking University</strong>, with research interests primarily in <strong>Image Restoration</strong>, <strong>Multimedia Security</strong>, and <strong>AI Generation</strong>.
        </p>
        
        <p>
          Currently a research intern at <strong>STRUCT</strong> (Spatial and Temporal Restoration, Understanding and Compression Team), Wangxuan Institute of Computer Technology, Peking University, advised by <strong>Prof. Jiaying Liu</strong>.
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
