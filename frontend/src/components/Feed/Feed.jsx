import React, { useState } from 'react';
import './Feed.css';

export default function Feed() {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(172);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };




  return (
    <>
      <div className="feed-title">
        <h2 className="feed-section-title">Feed</h2>
      </div>
      <div className="feed-container">
      <div className="feed-header">
        <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <div>
          <p className="feed-user">Rothan McKenzie</p>
          <p className="feed-location">Lawrence, KS · 2h</p>
        </div>
      </div>

      <img src="https://picsum.photos/4925/4722" alt="post" className="feed-image" />

      <div className="feed-reactions">
        <div className="like-container" onClick={toggleLike} style={{ cursor: 'pointer' }}>
          <img className="add" src={liked ? "/images/heart-filled.png" : "/images/heart.png"} alt="like"/>
          <p>{likes}</p>
        </div>
        <div className="comm-container">
          <img className="add" src="/images/message.png" alt="" />
          <p>17</p>
        </div>
        <div className="share-container">
          <img className="add" src="/images/send.png" alt="" />
        </div>
        
      </div>

      <p className="feed-caption">
        <strong>Rothan McKenzie</strong> New illustration &lt;3
      </p>

      <div className='feed-comment-container'>
      <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <input type="text" placeholder="Add a comment..." className="feed-comment"/>
        <button className="post-button">Post</button>
      </div>
    </div>

    <div className="feed-container">
      <div className="feed-header">
      <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <div>
          <p className="feed-user">Rothan McKenzie</p>
          <p className="feed-location">Lawrence, KS · 2h</p>
        </div>
      </div>

      <img src="https://picsum.photos/4920/4720" alt="post" className="feed-image" />

      <div className="feed-reactions">
      <div className="like-container" onClick={toggleLike} style={{ cursor: 'pointer' }}>
          <img className="add" src={liked ? "/images/heart-filled.png" : "/images/heart.png"} alt="like"/>
          <p>{likes}</p>
        </div>
        <div className="comm-container">
          <img className="add" src="/images/message.png" alt="" />
          <p>17</p>
        </div>
        <div className="share-container">
          <img className="add" src="/images/send.png" alt="" />
        </div>
        
      </div>

      <p className="feed-caption">
        <strong>Rothan McKenzie</strong> New illustration &lt;3
      </p>

      <div className='feed-comment-container'>
      <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <input type="text" placeholder="Add a comment..." className="feed-comment"/>
        <button className="post-button">Post</button>
      </div>
    </div>
    <div className="feed-container">
      <div className="feed-header">
      <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <div>
          <p className="feed-user">Rothan McKenzie</p>
          <p className="feed-location">Lawrence, KS · 2h</p>
        </div>
      </div>

      <img src="https://picsum.photos/4920/4721" alt="post" className="feed-image" />

      <div className="feed-reactions">
        <div className="like-container" onClick={toggleLike} style={{ cursor: 'pointer' }}>
          <img className="add" src={liked ? "/images/heart-filled.png" : "/images/heart.png"} alt="like"/>
          <p>{likes}</p>
        </div>
        <div className="comm-container">
          <img className="add" src="/images/message.png" alt="" />
          <p>17</p>
        </div>
        <div className="share-container">
          <img className="add" src="/images/send.png" alt="" />
        </div>
        
      </div>

      <p className="feed-caption">
        <strong>Rothan McKenzie</strong> New illustration &lt;3
      </p>

      <div className='feed-comment-container'>
      <img src="https://picsum.photos/40/40" alt="post" className="feed-avatar" />
        <input type="text" placeholder="Add a comment..." className="feed-comment"/>
        <button className="post-button">Post</button>
      </div>

    </div>
    </>
  
    
  );
}
