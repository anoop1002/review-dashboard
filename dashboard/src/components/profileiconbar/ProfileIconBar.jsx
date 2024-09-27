import React from "react";
import "./style.css";
import logoImg from "../../assets/logo-Img1.png";
import { Link } from "react-router-dom";

const ProfileIconBar = () => {
  return (
    <>
      <section className="m_nav">
        <div className="m_nav_conatiner">
          <div className="m_logo">
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          
            <div className="m_profile_icon">
              <Link to="/profile">
                <i class="fa-solid fa-user"></i>
              </Link>
              <Link to="/companyPage">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
       
      </section>
    </>
  );
};

export default ProfileIconBar;
