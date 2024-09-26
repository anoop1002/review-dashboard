import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { Link } from "react-router-dom";

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyName: "",
    designation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    const token = response.credential;
    console.log("Token: ", token);
    // Send the token to the backend to authenticate the user
  };

  const handleGoogleFailure = (error) => {
    console.log("Google Login Failed:", error);
  };

  return (
    <>
      <div className="dialog-backdrop">
        <div className="dialog-container">
          <button className="dialog-close-btn" onClick={onClose}>
            X
          </button>
          <section className="m_signIn_Container">
            <h1>
              Create an account or sign in
            </h1>

            <h5>
              Create an account or sign in. By continuing, you agree to <br/> our{" "}
              <Link to="#">Terms of Use</Link>{" "}and acknowledge our <Link to="/">Privacy Policy</Link>.
            </h5>
            <div className="m_signIn_field">
              <div className="m_emailField">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <button type="submit">Continue with email</button>
                  </div>
                </form>
              </div>

              <div>
                <p style={{ textAlign: "center", marginBlock: "10px" }}>Or</p>
              </div>

              <div className="m_googlebtn">
                <GoogleOAuthProvider clientId="518608806041-5s25kt81dl83fpqvolfdol12lkpeq6ip.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleFailure}
                    useOneTap
                  />
                </GoogleOAuthProvider>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUp;
