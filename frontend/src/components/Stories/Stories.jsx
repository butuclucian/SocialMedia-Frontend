import React from 'react';
import './Stories.css';

const stories = Array(6).fill({
  name: "Your story",
  img: "https://via.placeholder.com/60"
});

export default function Stories() {
  return (
    <>
    <div className="stories-title">
      <h2 className="stories-section-title">Stories</h2>
    </div>
    <div className="stories-container">
      <div className="stories-scroll">
        {stories.map((story, index) => (
          <div key={index} className="story-item">
            <img src="https://picsum.photos/412/440" alt="post" className="story-avatar" />
            <p className="story-name">{story.name}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
