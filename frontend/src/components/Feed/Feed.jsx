import React, { useState } from 'react';
import './Feed.css';

export default function Feed() {
  // Lista de utilizatori
  const users = [
    "Rothan McKenzie", "Liam Johnson", "Sophia Williams", "Olivia Brown", "Emma Jones",
    "Ava Garcia", "Isabella Martinez", "Mia Hernandez", "Ethan Wilson", "Lucas Taylor"
  ];

  const posts = Array(50).fill().map((_, index) => ({
    user: users[Math.floor(Math.random() * users.length)], 
    location: "Lawrence, KS · 2h",
    image: `https://picsum.photos/4925/4722?random=${index}`, // generare imagini
    caption: "New illustration <3",
    likes: Math.floor(Math.random() * 1000), // nr aleatoriu de like-uri
    comments: Math.floor(Math.random() * 100), // nr aleatoriu de comentarii
    liked: false, // stare like postare
  }));

  // modificare stare pentru fiecare psotare
  const [postStates, setPostStates] = useState(posts);

  const toggleLike = (index) => {
    const newPostStates = [...postStates]; // copy stare
    const post = newPostStates[index]; // select postare
    post.liked = !post.liked; // schimbare starea "liked"
    post.likes = post.liked ? post.likes + 1 : post.likes - 1; // actualizare nr like uri
    setPostStates(newPostStates); // noua stare
  };

  return (
    <>
        <div className="feed-title">
          <h2 className="feed-section-title">Feed</h2>
        </div>

      {postStates.map((post, index) => (
        <div className="feed-container" key={index}>
          <div className="feed-header">
            <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
            <div>
              <p className="feed-user">{post.user}</p>
              <p className="feed-location">{post.location}</p>
            </div>
          </div>

          <img src={post.image} alt="post" className="feed-image" />

          <div className="feed-reactions">
            <div className="like-container" onClick={() => toggleLike(index)} style={{ cursor: 'pointer' }}>
              <img className="add" src={post.liked ? "/images/heart-filled.png" : "/images/heart.png"} alt="like"/>
              <p>{post.likes}</p>
            </div>
            <div className="comm-container">
              <img className="add" src="/images/message.png" alt="" />
              <p>{post.comments}</p>
            </div>
            <div className="share-container">
              <img className="add" src="/images/send.png" alt="" />
            </div>
          </div>

          <p className="feed-caption">
            <strong>{post.user}</strong> {post.caption}
          </p>

          <div className='feed-comment-container'>
            <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
            <input type="text" placeholder="Add a comment..." className="feed-comment"/>
            <button className="post-button">Post</button>
          </div>
        </div>
      ))}
    </>
  );
}

