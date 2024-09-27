import React, { useState, useEffect } from "react";
import "./style.css";
import ProfileIconBar from "../profileiconbar/ProfileIconBar";

const CompanyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [companies, setCompanies] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [tableShow, setTableShow] = useState(false);

 

  const fetchCompanies = async (search = "") => {
    try {
      const response = await fetch(
        `http://localhost:5000/companies/search?name=${search}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch companies");
      }
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setTableShow(prev => !prev);
    setSearchTerm(value);

    // Clear the previous timeout if user keeps typing
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to delay the API call
    const newTimeout = setTimeout(() => {
      fetchCompanies(value);
    }, 500);

    setDebounceTimeout(newTimeout);
    fetchCompanies();
  };

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
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {tableShow && (
          <table className="company-table">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Payment Cycle</th>
                <th>Default Payments</th>
                <th>Default By</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company._id}>
                  <td>{company.companyName}</td>
                  <td>{company.paymentCycle}</td>
                  <td>{company.defaultPayments ? "Yes" : "No"}</td>
                  <td>{new Date(company.defaultBy).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default CompanyPage;
