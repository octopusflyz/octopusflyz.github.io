import React from 'react';
import "../css/All.css"

function News() {
  const news = [
    {
      time: "2026.07",
      content: <>Welcome to my new personal website! Stay tuned for updates.</>
    },
    {
      time: "2026.06",
      content: <>Working on exciting new projects. More coming soon...</>
    },
    {
      time: "2026.03",
      content: <>Attended an academic conference and presented my research.</>
    },
  ];

  return (
    <section id="news" className="news">
      <h2 className="section-title">News</h2>

      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index}>
            <span className="news-time">{item.time}</span>
            <span className="news-content">{item.content}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;
