import React from 'react'
import './ViewStories.css'

const ViewStories = () => {

  return (
    <div className='view-your-stories'>
      <div className="view-posts-title">
        <p className="v-p-title">Your Stories</p>
      </div>
      <div className='view-posts-container'>
      <img src="https://picsum.photos/483/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/492/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/436/401" alt="post" className="p-1" />
      <img src="https://picsum.photos/437/401" alt="post" className="p-1" />

      </div>
    </div>
  )
}

export default ViewStories
