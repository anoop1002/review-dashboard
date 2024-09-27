import React, { useState } from "react";
import "./style.css";
import ProfileIconBar from "../profileiconbar/ProfileIconBar";
import ReviewForm from "../review/ReviewForm";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileDataShow, setProfileDataShow] = useState(false);

  const handleUserData = () => {
 
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData).user; 
      setUserData(parsedUserData);
    }
    setProfileDataShow((prev) => !prev);
  };

  return (
    <>
      <ProfileIconBar />
      <div className="m_profile_field">
        <div className="m_profile_container">
          <div className="m_profile">
            <button
              type="button"
              className="m_profile_btn"
              id="m_btn_style"
              onClick={handleUserData}
            >
              Profile
            </button>
          </div>
          <div className="m_contribute">
            <button type="button" className="m_contribute_btn" id="m_btn_style">
              Contribute
            </button>
          </div>
        </div>
      
          <ReviewForm />
       
          {profileDataShow && userData && (
            <table className="user-info-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Company Name</td>
                  <td>{userData.companyName}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <td>Designation</td>
                  <td>{userData.designation}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userData.email}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
     
    </>
  );
};

export default Profile;
