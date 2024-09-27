import React from "react";

import "./style.css";
import ProfileIconBar from "../profileiconbar/ProfileIconBar";
import ReviewForm from "../review/ReviewForm";

const Profile = () => {
  return (
    <>
      <ProfileIconBar />

      <h1>Profile Page</h1>

      <ReviewForm />
    </>
  );
};

export default Profile;
