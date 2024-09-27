import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const ReviewForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    paymentCycle: "",
    defaultPayments: false,
    defaultBy: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to add a review
      const response = await axios.post(
        "http://localhost:5000/reviews",
        formData
      );

      if (response.status === 200) {
        toast.success("Review submitted successfully!");
        setFormData({
          companyName: "",
          paymentCycle: "",
          defaultPayments: false,
          defaultBy: "",
        });
        setIsDialogOpen(false);
      } else {
        toast.error("Failed to submit review");
      }
    } catch (error) {
      toast.error(
        `Error: ${error.response?.data?.error || "Something went wrong"}`
      );
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <style>{`
        .card {
          width: 100%;
          position: relative;
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          background-color: #ffffff;
        }
        .card-header {
          margin-bottom: 20px;
        }
        .card-header h2 {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          color: #555;
        }
        .form-group input[type="text"],
        .form-group input[type="date"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
        }
        .checkbox-group input[type="checkbox"] {
          margin-right: 10px;
        }
        .submit-button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .submit-button:hover {
          background-color: #0051bb;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #555;
        }
        .close-btn:hover {
          color: #000;
        }
      `}</style>

      {/* Trigger Button to open the dialog */}
      <button onClick={openDialog} className="open-dialog-button">
        Add Review Form
      </button>

     
        <div className="m_addicon">
          {/* <button onClick={openDialog} className="open-dialog-button">
          Add Review Form
        </button> */}

          {isDialogOpen && (
            <div className="card">
              <button className="close-btn" onClick={closeDialog}>
                ×
              </button>
              <div className="card-header">
                <h2>Submit Review</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="paymentCycle">Payment Cycle</label>
                  <input
                    id="paymentCycle"
                    name="paymentCycle"
                    type="text"
                    value={formData.paymentCycle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group checkbox-group">
                  <input
                    id="defaultPayments"
                    name="defaultPayments"
                    type="checkbox"
                    checked={formData.defaultPayments}
                    onChange={handleChange}
                  />
                  <label htmlFor="defaultPayments">Default Payments</label>
                </div>
                <div className="form-group">
                  <label htmlFor="defaultBy">Default By</label>
                  <input
                    id="defaultBy"
                    name="defaultBy"
                    type="date"
                    value={formData.defaultBy}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      
    </>
  );
};

export default ReviewForm;
