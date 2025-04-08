import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Feed from './components/Feed/Feed'
import Stories from './components/Stories/Stories'
import Sidebar from './components/Sidebar/Sidebar'
import Rightbar from './components/RightBar/RightBar'
import { Route, Routes } from "react-router-dom"
import Messages from './pages/Messages/Messages'
import ViewPosts from './pages/ViewPosts/ViewPosts'
import ViewStories from './pages/ViewStories/ViewStories'
import CreatePost from './pages/CreatePost/CreatePost'
import YourProfile from './pages/YourProfile/YourProfile'
import ViewPost from './components/ViewPost/ViewPost'

const App = () => {
  const [showPost, setShowPost] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
    setShowPost(true)
  }

  return (
    <div className="app">
      <Navbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />

        <div className="center-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<><Stories /><Feed /></>} />
            {/* <Route path="/messages" element={<Messages />} /> */}
            <Route path="/viewposts" element={<ViewPosts onImageClick={handleImageClick} />} />
            <Route path="/viewstories" element={<ViewStories />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/yourprofile" element={<YourProfile />} />
          </Routes>
        </div>

        <Rightbar />
      </div>

      {/* pop-up vizualizare postare */}
      {showPost && (<ViewPost setShowPost={setShowPost} image={selectedImage} />
      )}
    </div>
  )
}

export default App
