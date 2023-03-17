import "./HomePage.scss";
// import Header from "../components/Header/Header";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
// import CharityList from "../components/CharityList/CharityList";
// import Footer from "../components/Footer/Footer";
// import axios from "axios";

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
