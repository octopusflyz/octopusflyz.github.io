import React from 'react';
import "../css/All.css";

export default function Education() {
  const education = [
    {
      university: "Peking University",
      degree: "Undergraduate Student in Informatics and Computation Science, School of EECS",
      gpa: null,
      period: "2023 - Present",
      location: "Beijing, China",
      courses: [],
      advisor: null
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>

      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-university">{edu.university}</h3>
              <span className="education-period">
                {edu.period}
                <br />
                {edu.location}
              </span>
            </div>

            <div className="education-details">
              <p className="education-degree">
                <strong>{edu.degree}</strong>
                {edu.gpa && `, GPA: ${edu.gpa}`}
              </p>

              {edu.courses && edu.courses.length > 0 && (
                <div className="education-courses">
                  <span>Courses:</span>
                  <ul>
                    {edu.courses.map((course, i) => (
                      <li key={i}>
                        {course.name} ({course.grade})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.advisor && (
                <p className="education-advisor">
                  Advisor: <a href={edu.advisor.link} className="advisor-link">{edu.advisor.name}</a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
