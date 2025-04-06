import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Feed from './components/Feed/Feed'
import Stories from './components/Stories/Stories'
import Sidebar from './components/Sidebar/Sidebar'
import Rightbar from './components/RightBar/RightBar'
import { Route, Routes } from "react-router-dom";
import Messages from './pages/Messages/Messages'
import ViewPosts from './pages/ViewPosts/ViewPosts'
import ViewStories from './pages/ViewStories/ViewStories'
import CreatePost from './pages/CreatePost/CreatePost'
import YourProfile from './pages/YourProfile/YourProfile'


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />
        
        <div className="center-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <Stories />
                <Feed />
              </>
            } />
            <Route path="/messages" element={<Messages />} />
            <Route path="/viewposts" element={<ViewPosts />} />
            <Route path="/viewstories" element={<ViewStories />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/yourprofile" element={<YourProfile />} />
          </Routes>
        </div>

        <Rightbar />
      </div>
    </div>
  )
}

export default App
