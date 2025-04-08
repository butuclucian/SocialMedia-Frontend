import React from 'react'
import './ViewPost.css'

const ViewPost = ({ setShowPost }) => {


  return (
    <div className="popup-overlay" onClick={() => setShowPost(false)}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <img src="https://picsum.photos/600/500" alt="Post" />
        
        <button className='close-btn' onClick={() => setShowPost(false)}>Close</button>
      </div>
    </div>
  )
}

export default ViewPost
