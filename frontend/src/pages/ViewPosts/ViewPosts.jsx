import React from 'react'
import './ViewPosts.css'

const ViewPosts = () => {
  return (
    <div className='view-posts'>
      <div className="view-posts-title">
        <p className="v-p-title">Your Posts</p>
      </div>
      <div className='view-posts-container'>
      <img src="https://picsum.photos/427/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/421/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/425/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/423/401" alt="post" className="p-1" />

      </div>
    </div>
  )
}

export default ViewPosts
