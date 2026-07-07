import React from 'react';
import "../css/All.css";

export default function Education() {
  const education = [
    {
      university: "Peking University",
      degree: "Master/Ph.D. in Computer Science",
      gpa: "3.8/4.0",
      period: "2023.09 - Present",
      location: "Beijing, China",
      courses: [
        { name: "Machine Learning", grade: 95 },
        { name: "Algorithm Design", grade: 92 },
      ],
      advisor: null
    },
    {
      university: "Previous University",
      degree: "Bachelor in Computer Science",
      gpa: "3.9/4.0",
      period: "2019.09 - 2023.06",
      location: "China",
      courses: [
        { name: "Data Structures", grade: 98 },
        { name: "Operating Systems", grade: 95 },
      ],
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
