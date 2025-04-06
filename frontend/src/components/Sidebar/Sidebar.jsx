import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
     {/* ------ chenar account ----- */}
      <div className="chenar-account">
        <div className="sidebar-btn">
        <NavLink to="/yourprofile">
          <button className="side-btn">
            <img className="settings" src="/images/settings.png" alt="" />
          </button>
        </NavLink>
        </div>
        <div className="account-info">
          <img src="https://picsum.photos/432/440" alt="post" className="acc-avatar" />
          <div className="account-name">Alexis Wells</div>
          <div className="account-handle">@wellsalex</div>
        </div>

        <div className="account-stats">
          <div>
            <div className="stats">4.6k</div>
            <div className="txt">followers</div>
          </div>
          <div>
            <div className="stats">4.6k</div>
            <div className="txt">following</div>
          </div>
          <div>
            <div className="stats">80</div>
            <div className="txt">posts</div>
          </div>
        </div>

        <div className="account-bio">
          <div className="bio">Bio</div>
          <div className="description">ui/ux designer | traveler</div>
        </div>

        <div className="account-story">
          <div className="story-header">
            <div className="story-text">Story</div>
            <div className="story-view-all">
              <NavLink to="/viewstories" className="navlink-view-all"> view all
                </NavLink>
              </div>
          </div>
          <div className="story-container">
            <div className="story1">
              {/* <div className="story"></div> */}
              <img src="https://picsum.photos/440/447" alt="post" className="story" />
              <p className="story-desc">Your Story</p>
            </div>
            <div className="story2">
            <img src="https://picsum.photos/446/440" alt="post" className="story" />
              <p className="story-desc">Your Story</p>
            </div>
            <div className="story3">
            <img src="https://picsum.photos/441/440" alt="post" className="story" />
              <p className="story-desc">Your Story</p>
            </div>
            <div className="story4">
            <img src="https://picsum.photos/440/441" alt="post" className="story" />
              <p className="story-desc">Your Story</p>
            </div>

          </div>
        </div>

        <div className="account-posts">
          <div className="posts-header">
            <div className="posts-text">Posts</div>
            <div className="posts-view-all">
              <NavLink to="/viewposts" className="navlink-view-all"> view all
                </NavLink>
              </div>
          </div>
          <div className="posts-container">
          <img src="https://picsum.photos/443/443" alt="post" className="post" />
          <img src="https://picsum.photos/442/442" alt="post" className="post" />
          <img src="https://picsum.photos/441/441" alt="post" className="post" />
          </div>
        </div>
      </div>


     {/* ------ chenar account ----- */}
      <div className="chenar-messages">
        <div className="messages-title">Messages</div>
        <div className="messages-view-all">
              <NavLink to="/messages" className="navlink-view-all"> view all
                </NavLink>
              </div>
        <div className="message-user">
        <img src="https://picsum.photos/422/440" alt="post" className="profile-pct" />
          <div className="username-info">
            <p className="username">Rothan McKenzie</p>
            <p className="msg">Rothan send a message</p>
          </div>
          <div className="message-time">12:45</div>
        </div>
        <div className="message-user">
        <img src="https://picsum.photos/422/449" alt="post" className="profile-pct" />
          <div className="username-info">
            <p className="username">Rothan McKenzie</p>
            <p className="msg">Rothan send a message</p>
          </div>
          <div className="message-time">12:45</div>
        </div>
        <div className="message-user">
        <img src="https://picsum.photos/422/447" alt="post" className="profile-pct" />
          <div className="username-info">
            <p className="username">Rothan McKenzie</p>
            <p className="msg">Rothan send a message</p>
          </div>
          <div className="message-time">12:45</div>
        </div>
        <div className="message-user">
        <img src="https://picsum.photos/422/442" alt="post" className="profile-pct" />
          <div className="username-info">
            <p className="username">Rothan McKenzie</p>
            <p className="msg">Rothan send a message</p>
          </div>
          <div className="message-time">12:45</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
