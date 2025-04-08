import React from 'react'
import './ViewPosts.css'

const ViewPosts = ({ onImageClick }) => {
  const images = [
    "https://picsum.photos/id/1011/427/401",
    "https://picsum.photos/id/1012/421/401",
    "https://picsum.photos/id/1013/425/401",
    "https://picsum.photos/id/1014/423/401"
  ]

  return (
    <div className='view-posts'>
      <div className="view-posts-title">
        <p className="v-p-title">Your Posts</p>
      </div>
      <div className='view-posts-container'>
        {images.map((img, index) => (
          <img key={index} src={img} alt="post" className="p-1" onClick={() => onImageClick(img)} />
        ))}
      </div>
    </div>
  )
}

export default ViewPosts
