import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-butoane">
      <NavLink to='/'>
        <button className="btn">
            <img className="home" src="/images/home.png" alt="" />
        </button>
        </NavLink>
      </div>
      <div className="search-box">
        <input className="search" type="text" placeholder="Search" />
      </div>

      <div className="nav-butoane">
        <div className="chenar-add">
          <NavLink to='/createpost'>
          <button className="btn">
            <img className="add" src="/images/add.png" alt="" />
          </button>
          </NavLink>
        </div>
        <div className="chenar-notif">
          <button className="btn">
          <img className="notif" src="/images/notif.png" alt="" />
          </button>
        </div>
        <div className="chenar-reels">
          <button className="btn">
          <img className="reels" src="/images/reels.png" alt="" />
          </button>
        </div>
        <div className="chenar-explore">
          <button className="btn">
          <img className="explore" src="/images/explore.png" alt="" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
