import React from 'react';
import "../css/All.css";

export default function Publications() {
  const publications = [
    {
      authors: "Jiaying Liu, Yufei Zhang, Minghao Liu, Wenhan Yang",
      title: "一种基于原型匹配与知识重组的图像增强方法及系统",
      venue: "Chinese Patent Application, 202610538883.4 (Patent Pending)",
    },
    {
      authors: "Jiaying Liu, Yufei Zhang, Minghao Liu, Yu Cao, Wenhan Yang",
      title: "一种基于持续学习与自监督学习的视频去雨方法及系统",
      venue: "Chinese Patent Application, 202610852175.8 (Patent Pending)",
    },
  ];

  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Publications</h2>

      <div className="pub-list">
        {publications.map((pub, index) => (
          <div key={index} className="pub-item">
            <h3 className="pub-title">{pub.title}</h3>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-venue">{pub.venue}</p>
          </div>
        ))}
      </div>

      <style>{`
        .pub-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pub-item {
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 8px;
          background-color: #fcfcfc;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .pub-item:hover {
          transform: scale(0.98);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .pub-title {
          font-size: 1rem;
          font-weight: 700;
          color: #242424;
          margin-bottom: 0.5rem;
        }
        .pub-authors {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 0.25rem;
        }
        .pub-venue {
          font-size: 0.8rem;
          color: #8B9EB7;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .pub-links {
          display: flex;
          gap: 0.5rem;
        }
        .pub-link {
          font-size: 0.8rem;
          padding: 4px 12px;
          background-color: #F0F3F5;
          border-radius: 99px;
          color: #8B9EB7;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pub-link:hover {
          background-color: #8B9EB7;
          color: white;
        }
      `}</style>
    </section>
  );
}
