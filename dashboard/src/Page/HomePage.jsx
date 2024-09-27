import React from "react";
import "./style.css"
import Navbar from "../components/navbar/Navbar";
import titlePage from "../assets/titleCoverPage.png";
const HomePage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="m-home">
           <img src={titlePage} alt="titlePage" />
      </section>
    </>
  );
};

export default HomePage;
