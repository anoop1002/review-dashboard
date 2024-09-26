import React from "react";
import "./style.css";
import ProfileIconBar from "../profileiconbar/ProfileIconBar";

const CompanyPage = () => {
  return (
    <>
      <ProfileIconBar />
      <section className="m_company_container">
        <div className="m_search_field">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            name="search"
            placeholder="Search by company name"
          />
        </div>
      </section>
    </>
  );
};

export default CompanyPage;
