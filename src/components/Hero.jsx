import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiZhihu } from "react-icons/si";
import "../css/Hero.css";

function Hero() {
  const links = [
    { icon: <FaEnvelope />, label: "Email", url: "mailto:octopusfly@stu.pku.edu.cn" },
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/octopusflyz" },
    { icon: <SiZhihu />, label: "Zhihu", url: "https://www.zhihu.com/people/your-id" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/语菲-张-9b33443a1/" },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-image">
          <img 
            src="/assets/people.jpg" 
            alt="Profile" 
            className="profile-pic"
          />
        </div>
        
        <div className="hero-meta">
          <h1 className="meta-name">Zhang Yufei 张语菲</h1>
          <p className="meta-subtitle">Welcome to my page!</p>
          
          <div className="meta-tags">
            <span className="meta-tag">🔮 Researcher</span>
            <span className="meta-tag">👩🏻‍💻 Developer</span>
            <span className="meta-tag">🎨 Designer</span>
          </div>

          <div className="contact-buttons">
            {links.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="meta-linkitem"
              >
                {item.icon}
                <span style={{ marginLeft: '8px' }}>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="contact-small">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="meta-link"
                title={item.label}
              >
                <span className="icon-link">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-footer">
        Last Updated: 2026/07/07
      </div>
    </section>
  );
}

export default Hero;
