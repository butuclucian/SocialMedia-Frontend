import React from "react";
import "./Messages.css";

const Messages = () => {
  return (
    <>
      <div className="messages-section">
        <div className="messages-container">
          <div className="messages-header">
            <div className="mess-user-info">
              <div className="user-avatar"></div>
              <p className="mess-username">Rothan McKenzie</p>
            </div>

            <div className="user-opt">
            <img className="call" src="/images/call.png" alt="" />
            <img className="video" src="/images/video.png" alt="" />
            <img className="info" src="/images/info.png" alt="" />
            </div>

          </div>
          <hr className="hr" />
          <div className="messages-body">
            <div className="message-sender">
              <div className="message-sender-text">Hello</div>
            </div>
            <div className="message-receiver">
              <div className="message-receiver-text">Hi</div>
            </div>
            <div className="message-sender">
              <div className="message-sender-text">How are you?</div>
            </div>
            <div className="message-sender">
              <img src="https://picsum.photos/483/431" alt="post" className="message-sender-img" />
            </div>
            <div className="message-receiver">
              <div className="message-receiver-text">Hi</div>
            </div>
            <div className="message-receiver">
              <div className="message-receiver-text">Hasdasdsdsdi</div>
            </div>
            <div className="message-receiver">
              <div className="message-receiver-text">Hisadasds</div>
            </div>
          </div>

            <input type="text" className="mess-type" placeholder="Type a message..." />

        </div>
      </div>
    </>
  );
};

export default Messages;
