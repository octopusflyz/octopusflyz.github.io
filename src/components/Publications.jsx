import React from 'react';
import "../css/All.css";

export default function Publications() {
  const publications = [
    {
      title: "Paper Title 1",
      authors: "Zhang, Y., Author, A., & Author, B.",
      venue: "Conference Name 2026",
      links: [
        { text: "Paper", url: "#" },
        { text: "GitHub", url: "#" },
      ]
    },
    {
      title: "Paper Title 2",
      authors: "Zhang, Y., Author, C.",
      venue: "Journal Name 2025",
      links: [
        { text: "Paper", url: "#" },
      ]
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
            <div className="pub-links">
              {pub.links.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  {link.text}
                </a>
              ))}
            </div>
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
          color: #F42E7A;
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
          background-color: #FFF6F8;
          border-radius: 99px;
          color: #F42E7A;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pub-link:hover {
          background-color: #F42E7A;
          color: white;
        }
      `}</style>
    </section>
  );
}
