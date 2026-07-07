import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
  const awards = [
    {
      text: "[2026] Outstanding Achievement Award",
      highlight: "(Top 5%)",
    },
    {
      text: "[2025] Academic Excellence Scholarship",
      highlight: "(Top 3%)",
    },
    {
      text: "[2024] Best Paper Award",
      highlight: "",
    },
    {
      text: "[2023] National Scholarship",
      highlight: "(Top 2%)",
    },
  ];

  return (
    <section id="awards" className="awards">
      <h2 className="section-title">Selected Awards</h2>

      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <span className="award-icon">✦</span>
            <span className="award-text">
              {award.text}
              {award.highlight && (
                <span className="award-highlight">{award.highlight}</span>
              )}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .awards-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .award-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background-color: #fcfcfc;
          border-radius: 8px;
          border: 1px solid #eee;
        }
        .award-icon {
          color: #FFBED2;
          font-size: 1rem;
        }
        .award-text {
          font-size: 0.9rem;
          color: #242424;
        }
        .award-highlight {
          color: #F42E7A;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
