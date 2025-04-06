import React from "react";
import "./RightBar.css";

const Rightbar = () => {
  return (
    <>
      <div className="chenar-suggested">
        <div className="suggested-title">Suggested for you</div>
        <div className="user">
        <img src="https://picsum.photos/412/440" alt="post" className="avatar" />
          <div className="user-info">
            <p className="name">Andrei</p>
            <p className="handle">@andrei123</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>  
        <div className="user">
        <img src="https://picsum.photos/412/443" alt="post" className="avatar" />
          <div className="user-info">
            <p className="name">Andrei</p>
            <p className="handle">@andrei123</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>  
        <div className="user">
        <img src="https://picsum.photos/412/420" alt="post" className="avatar" />
          <div className="user-info">
            <p className="name">Andrei</p>
            <p className="handle">@andrei123</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>  
        <div className="user">
        <img src="https://picsum.photos/412/410" alt="post" className="avatar" />
          <div className="user-info">
            <p className="name">Andrei</p>
            <p className="handle">@andrei123</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>  
        
      </div>

      <div className="chenar-saved">
        <div className="saved-title">Saved</div>
        <div className="saved-view-all">view all</div>
        <div className="post-images">
        <img src="https://picsum.photos/420/400" alt="post" className="post-image" />
        <img src="https://picsum.photos/419/400" alt="post" className="post-image" />
        <img src="https://picsum.photos/413/400" alt="post" className="post-image" />
        </div>
      </div>
    </>
  );
};

export default Rightbar;
