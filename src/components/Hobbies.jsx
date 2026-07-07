import React from 'react';
import { FaPlane, FaMusic, FaGamepad } from 'react-icons/fa';
import "../css/All.css";

export default function Hobbies() {
  const hobbies = [
    {
      icon: <FaPlane />,
      title: "Travel",
      description: "Love exploring new places and experiencing different cultures!",
    },
    {
      icon: <FaMusic />,
      title: "Live Concerts",
      description: "Passionate about attending live concerts and soaking in the atmosphere!",
    },
    {
      icon: <FaGamepad />,
      title: "Esports Events",
      description: "Watching esports events, embracing the thrill of competition!",
    },
  ];

  return (
    <section id="hobbies" className="hobbies">
      <h2 className="section-title">Interests</h2>
      
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-desc">{hobby.description}</p>
          </div>
        ))}
      </div>

      <div className="hobbies-note">
        <p>Excited to meet fellow fans!</p>
      </div>

      <style>{`
        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
        }

        .hobby-item {
          background-color: #ffffff;
          border-radius: 8px;
          border: 1px solid #eee;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .hobby-item:hover {
          transform: scale(0.98);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .hobby-icon {
          font-size: 2rem;
          color: #8B9EB7;
          margin-bottom: 1rem;
        }

        .hobby-title {
          font-size: 1rem;
          font-weight: 700;
          color: #242424;
          margin-bottom: 0.5rem;
        }

        .hobby-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
          text-align: left;
        }

        .hobbies-note {
          margin-top: 1.5rem;
          text-align: center;
        }

        .hobbies-note p {
          font-size: 0.9rem;
          color: #8B9EB7;
          font-style: italic;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
