import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./style.css";
import { Link } from "react-router-dom";
import {toast,Bounce } from 'react-toastify';
import { useNavigate } from "react-router-dom";



const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    companyName: "",
    designation: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [register, setRegister] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (data) => {
    data.preventDefault();

    const emailValue = data.target.email.value;
    console.log("emailValue:", emailValue);

    setError("");

    try {
      const response = await fetch("http://localhost:5000/checkEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });

      console.log("response:", response);
      // if (response.status === 200) {
      //   const result = await response.json();
      //   console.log("Result", result);

      //   if (response.message === "Email not registered" ) {
      //     setShowPasswordField(true);
      //     setError("Email not registered");
      //   } else {
      //     setError("Email is already registered. Please log in.");
      //   }
      // } else {
      //   const result = await response.text();
      //   try {
      //     const jsonResult = JSON.parse(result);
      //     setError(jsonResult.message);
      //   } catch (parseError) {
      //     setError("An unexpected error occurred.");
      //   }
      // }
      if (response.status === 200) {
       
         navigate("/companyPage");
     
        setShowPasswordField(false);  
        
      } else if (response.status === 400) {
        setShowPasswordField(true)
      }
      else{
        console.log("Data can not be fetched")
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
    
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:5000/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        
        const result = await response.json();
        toast.success(result.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        setShowPasswordField(false);
        setRegister(result);
        console.log("Registration successful:", result);
      } else {
        const result = await response.text();
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      console.error("Error:", error);
      setError("An error occurred during registration.");
    }
  };

  // Send the token to the backend to authenticate the user
  const handleGoogleSuccess = (response) => {
    console.log("Google Login Success:", response);
    const token = response.credential;
    console.log("Token: ", token);
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
            <h1>Create an account or sign in</h1>

            <h5>
              Create an account or sign in. By continuing, you agree to <br />{" "}
              our <Link to="#">Terms of Use</Link> and acknowledge our{" "}
              <Link to="/">Privacy Policy</Link>.
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
                    required
                  />
                  <div style={{ marginTop: "10px" }}>
                    <button type="submit">Continue with email</button>
                  </div>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              {/* {register && <p style={{ color: "green" }}>{register}</p>} */}

              <div className="registerDialogBox">
                {showPasswordField && (
                  <>
                    <div
                      className="m_passwordField"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div
                      className="m_passwordField"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div
                      className="m_passwordField"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div
                      className="m_passwordField"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div
                      className="m_passwordField"
                      style={{ marginTop: "20px" }}
                    >
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <button type="button" onClick={handleRegister}>
                        Register
                      </button>
                    </div>
                  </>
                )}
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
