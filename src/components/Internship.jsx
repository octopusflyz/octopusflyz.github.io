import React, { useState } from "react";
import "../css/Internship.css";

export default function Internship() {
  const experiences = [
    {
      type: "Work",
      organization: {
        name: "Company Name",
        link: "https://example.com",
      },
      period: "2025.01 - Present",
      role: "Software Engineer",
      location: "Beijing, China",
      projects: [
        { 
          name: "Project Name", 
          roles: ["#Development", "#Design"] 
        },
      ]
    },
    {
      type: "Research",
      organization: {
        name: "Research Lab",
        link: "https://example.com",
      },
      period: "2024.06 - 2024.12",
      role: "Research Assistant",
      location: "Beijing, China",
      projects: [
        { 
          name: "Research Project", 
          roles: ["#Research", "#Analysis"] 
        },
      ]
    },
  ];

  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredExperiences = selectedTag === "All"
    ? experiences
    : experiences.filter(exp => exp.type === selectedTag);

  return (
    <section id="internship" className="internship">
      <h2 className="section-title">Experience</h2>

      <div className="filter-tabs">
        <button 
          className={`filter-tab ${selectedTag === 'All' ? 'active' : ''}`}
          onClick={() => handleTagClick("All")}
        >
          All
        </button>
        <button 
          className={`filter-tab ${selectedTag === 'Work' ? 'active' : ''}`}
          onClick={() => handleTagClick("Work")}
        >
          Work
        </button>
        <button 
          className={`filter-tab ${selectedTag === 'Research' ? 'active' : ''}`}
          onClick={() => handleTagClick("Research")}
        >
          Research
        </button>
      </div>

      <div className="timeline-container">
        {filteredExperiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-period-label">
              {exp.period.split(' - ')[0]}\n–\n{exp.period.split(' - ')[1]}
            </div>

            <div className="timeline-content">
              <div className="org-logo-container">
                <div className="exp-organization">
                  <a 
                    href={exp.organization.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-organization-name"
                  >
                    {exp.organization.name}
                  </a>
                  <span className="exp-role">{exp.role}</span>
                </div>
              </div>

              <div className="exp-container">
                <div className="timeline-header">
                  <span className={`exp-type ${exp.type.toLowerCase()}`}>
                    {exp.type}
                  </span>
                  <span className="exp-location">{exp.location}</span>
                </div>

                {exp.projects && (
                  <ul className="exp-projects">
                    {exp.projects.map((proj, i) => (
                      <li key={i}>
                        <strong>{proj.name}</strong>
                        <div className="project-roles">
                          {proj.roles.map((role, idx) => (
                            <span key={idx} className="role-tag">{role}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
