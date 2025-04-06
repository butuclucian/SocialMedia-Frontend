import React from "react";
import "./YourProfile.css";

const YourProfile = () => {
  return (
    <>
      <div className="your-profile">
        <div className="your-profile-header">
        <img src="https://picsum.photos/400/401" alt="post" className="your-profile-avatar" />
          <div className="your-profile-info">
            <div className="your-profile-stats">
              <div>
                <div className="your-profile-stats-number">4.6k</div>
                <div className="your-profile-stats-text">followers</div>
              </div>
              <div>
                <div className="your-profile-stats-number">4.6k</div>
                <div className="your-profile-stats-text">following</div>
              </div>
              <div>
                <div className="your-profile-stats-number">4.6k</div>
                <div className="your-profile-stats-text">posts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="your-profile-story-section">
        <img src="https://picsum.photos/403/401" alt="post" className="your-profile-story" />
        <img src="https://picsum.photos/401/401" alt="post" className="your-profile-story" />
        <img src="https://picsum.photos/405/401" alt="post" className="your-profile-story" />
        <img src="https://picsum.photos/440/401" alt="post" className="your-profile-story" />
        <img src="https://picsum.photos/430/401" alt="post" className="your-profile-story" />
        <img src="https://picsum.photos/420/401" alt="post" className="your-profile-story" />
        </div>
        <div className="your-profile-buttons">
          <button className="your-profile-button">Edit Profile</button>
          <button className="your-profile-button2">Message</button>
        </div>
        <div className="your-profile-posts">
          <div className="title-your-profile-posts">
            <p>Posts</p>
          </div>
          <div className="your-profile-posts-grid">
          <img src="https://picsum.photos/420/421" alt="post" className="your-profile-post" />
          <img src="https://picsum.photos/420/401" alt="post" className="your-profile-post" />
          <img src="https://picsum.photos/422/401" alt="post" className="your-profile-post" />
          <img src="https://picsum.photos/421/401" alt="post" className="your-profile-post" />
          <img src="https://picsum.photos/426/401" alt="post" className="your-profile-post" />
          <img src="https://picsum.photos/429/401" alt="post" className="your-profile-post" />
          </div>
        </div>
      </div>
    </>
  );
};

export default YourProfile;
