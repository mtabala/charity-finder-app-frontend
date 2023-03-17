import "./Homepage.scss";
// import "./CharityPage";
// import Header from "../components/Header/Header";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import CharityCard from "../components/CharityCard/CharityCard";
// import Footer from "../components/Footer/Footer";
// import CharityList from "../components/CharityList/CharityList";
// import Footer from "../components/Footer/Footer";
// import axios from "axios";
  // const [charities, setCharity]
  // const { charityId } = useParams();

  useEffect(() =>{
  getCharity();
  }, [])

  useEffect(() => {
    let id = charityId || charity[0]?.id;
    if(id) {
      getCharity(id);
    }
  }, [charityId, charity])

function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      {charities & selectedCharity && <CharityCard 
      charities={charities}
      selectedCharity={selectedCharity}/>}
    </div>
  );
}

export default Homepage;
