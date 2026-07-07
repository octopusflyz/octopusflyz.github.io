import React from "react";
import "../css/Internship.css";

export default function Internship() {
  const experiences = [
    {
      type: "Research",
      organization: {
        name: "Wangxuan Institute of Computer Technology (WICT)",
        link: "https://www.wict.pku.edu.cn/",
      },
      period: "2025.07 – Present",
      role: "Undergraduate Intern",
      location: "Beijing, China",
      details: [
        "Spatial and Temporal Restoration, Understanding and Compression Team (STRUCT)",
        "Supervised by Prof. Jiaying Liu"
      ]
    },
  ];

  return (
    <section id="internship" className="internship">
      <h2 className="section-title">Experience</h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-period">
              <span className="period-text">{exp.period}</span>
            </div>

            <div className="timeline-content">
              <div className="exp-header">
                <div className="exp-organization">
                  <a 
                    href={exp.organization.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-organization-name"
                  >
                    {exp.organization.name}
                  </a>
                  <div className="exp-role-location">
                    <span className="exp-role">{exp.role}</span>
                    <span className={`exp-type ${exp.type.toLowerCase()}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {exp.details && (
                <ul className="exp-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
