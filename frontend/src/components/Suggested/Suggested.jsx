import React from "react";
import "./Suggested.css";

const Suggested = () => {
  return (
    <>
      {/* ------ chenar suggested ----- */}
      <div className="chenar-suggested">
        <h2 className="suggested-title">Suggested for you</h2>
        <div class="user">
          <div class="avatar"></div>
          <div class="user-info">
            <p class="name">Rothan McKenzie</p>
            <p class="handle">@floydett</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
        <div class="user">
          <div class="avatar"></div>
          <div class="user-info">
            <p class="name">Rothan McKenzie</p>
            <p class="handle">@floydett</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
        <div class="user">
          <div class="avatar"></div>
          <div class="user-info">
            <p class="name">Rothan McKenzie</p>
            <p class="handle">@floydett</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
        <div class="user">
          <div class="avatar"></div>
          <div class="user-info">
            <p class="name">Rothan McKenzie</p>
            <p class="handle">@floydett</p>
          </div>
          <button class="follow-btn">Follow</button>
        </div>
      </div>

      {/* ------ chenar saved----- */}
      <div className="chenar-saved">
        <h2 className="saved-title">Saved</h2>
        <h3 className="saved-view-all">view all</h3>
        <div className="saved-item">
          <div className="post-images">
            <div className="post-image"></div>
            <div className="post-image"></div>
            <div className="post-image"></div>
          </div>
        </div>
      </div>

      {/* ------ chenar account ----- */}
      <div className="chenar-account">
        <div className="settings-icon"></div>
        <div class="account-info">
          <div className="acc-avatar"></div>
          <p class="account-name">Alexis Wells</p>
          <p class="account-handle">@wellsalex</p>
          <div className="account-stats">
            <div className="followers-container">
              <p className="stats">4.6k</p>
              <p class="txt">followers</p>
            </div>
            <div className="followers-container">
              <p className="stats">4.6k</p>
              <p class="txt">following</p>
            </div>
            <div className="followers-container">
              <p className="stats">4.6k</p>
              <p className="txt">posts</p>
            </div>
          </div>
        </div>
        <div className="account-bio">
          <p className="bio">Bio</p>
          <p className="description">ui/ux designer | traveler</p>
        </div>
        <div className="account-story">
          <div className="story-header">
            <p className="story-text">Story</p>
            <p className="story-view-all">view all</p>
          </div>
          <div className="story-container">
            <div className="story1">
              <div className="story"></div>
              <p>Your Story</p>
            </div>
            <div className="story2">
              <div className="story"></div>
              <p>Flag1</p>
            </div>
            <div className="story3">
              <div className="story"></div>
              <p>Flag2</p>
            </div>

            <div className="story4">
              <div className="story"></div>
              <p>Flag3</p>
            </div>
          </div>
        </div>
        <div className="account-posts">
          <div className="posts-header">
            <p className="posts-text">Story</p>
            <p className="posts-view-all">view all</p>
          </div>
          <div className="posts-container">
            <div className="post"></div>
            <div className="post"></div>
            <div className="post"></div>
          </div>
        </div>
      </div>

      {/* ------ chenar messages----- */}
      <div className="chenar-messages">
        <h2 className="messages-title">Messages</h2>
        <h3 className="messages-view-all">view all</h3>
        <div class="message-user">
          <div class="profile-pct"></div>
          <div class="username-info">
            <p class="username">Rothan McKenzie</p>
            <p class="msg">Rothan send a message</p>
          </div>
          <p class="message-time">2h</p>
        </div>
        <div class="message-user">
          <div class="profile-pct"></div>
          <div class="username-info">
            <p class="username">Rothan McKenzie</p>
            <p class="msg">Rothan send a message</p>
          </div>
          <p class="message-time">2h</p>
        </div>
        <div class="message-user">
          <div class="profile-pct"></div>
          <div class="username-info">
            <p class="username">Rothan McKenzie</p>
            <p class="msg">Rothan send a message</p>
          </div>
          <p class="message-time">2h</p>
        </div>
        <div class="message-user">
          <div class="profile-pct"></div>
          <div class="username-info">
            <p class="username">Rothan McKenzie</p>
            <p class="msg">Rothan send a message</p>
          </div>
          <p class="message-time">2h</p>
        </div>
      </div>
    </>
  );
};

export default Suggested;

// import React from "react";
// import Sidebar from '../components/Sidebar/Sidebar'
// import Rightbar from '../components/RightBar/RightBar'

// const Suggested = () => {
//   return (
//     <div className="suggested-wrapper" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
//       <Sidebar />
//       <Rightbar />
//     </div>
//   );
// };

// export default Suggested;

