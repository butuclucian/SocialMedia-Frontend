import React from 'react';
import './Stories.css';

const stories = Array(100).fill().map((_, index) => ({
  name: "Your story",
  img: `https://picsum.photos/60?random=${index}` //genera imagini
}));

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
              <img src={story.img} alt="post" className="story-avatar" />
              <p className="story-name">{story.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
