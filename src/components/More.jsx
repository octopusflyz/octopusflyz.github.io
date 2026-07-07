import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import "../css/All.css";

export default function More() {
  return (
    <section id="more" className="more-section">
      <h2 className="section-title">More</h2>

      <div className="more-content">
        <p className="more">
          I enjoy exploring new technologies, reading, and contributing to open-source projects.
          <br />
          Feel free to connect with me through the links below!
        </p>
      </div>

      <div className="contact-box">
        <a href="mailto:octopusfly@stu.pku.edu.cn" className="contact-item">
          <FaEnvelope />
          <span>octopusfly@stu.pku.edu.cn</span>
        </a>
        <a href="https://github.com/octopusflyz" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub />
          <span>@octopusflyz</span>
        </a>
      </div>
    </section>
  );
}
