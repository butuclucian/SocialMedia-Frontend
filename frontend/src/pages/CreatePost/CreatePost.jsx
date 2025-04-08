import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <>
      <div className="create-post-wrapper">
        <div className="create-post-header">
          <h2 className="create-post-title">Create new post</h2>
          <div className="file-upload-container"></div>
        </div>
        <div className="create-post-box">
          <form className="post-form">
            <textarea placeholder="Add description" rows="4" />
            <input type="text" placeholder="Add location" />
            <button type="button" className="advanced-settings">Advanced settings</button>
          </form>
        </div>
        <button type="submit" className="share-button">Share</button>
      </div>
    </>
  );
};

export default CreatePost;
