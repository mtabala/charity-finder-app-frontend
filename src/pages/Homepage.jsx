import "./Homepage.scss";

import Hero from "../components/Hero/Hero";
import CharityCard from "../components/CharityCard/CharityCard";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import Hero from "../components/Hero/Hero";
import axios from "axios";
import SelectedCharity from "../components/SelectedCharity/SelectedCharity";

function Homepage() {
    //Define API
    const api = "http://localhost:5000";
    console.log("masha");
    //Define use state variables using useState hooks
    const [organizations, setOrganizations] = useState([]); //all organizations
    const [currentOrganization, setCurrentOrganization] = useState(null) //selected organization
    const { charityId } = useParams();

    
    
    function getRandomOrg(orgListLen) {
      return Math.floor((Math.random() * orgListLen));
    }
    
    // Define useEffect to get all organizations from our json api
    useEffect(() => {
      getOrganizations();    }, []);
      
      useEffect(() => {
        if (charityId) {
          getCurrentOrg(charityId);
        } else if (organizations.length) {
          let randomOrg = getRandomOrg(organizations.length);
          let currentOrg = organizations[randomOrg].id;
          getCurrentOrg(currentOrg);
        }
      }, [charityId, organizations])

    function getCurrentOrg(orgId) {
        const url = `http://localhost:5000/organization/${orgId}}`;
        axios.get(url)
            .then(response => {
                setCurrentOrganization(response.data)
                console.log(response)
            })
            .catch(err => {
                console.log(err, "could not find the requested organization");
            })
    }

    // Define function to get all videos from the API
    function getOrganizations() {
        axios
            .get(`${api}/organization`)
            .then((response) => {
                setOrganizations(response.data);
                console.log(response.data)
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    return (
      organizations && charityId ?
      <>
          <div className="homepage">
              <Hero />
              <CharityCard 
              organizations={organizations}
              currentOrganization={currentOrganization}/>
              <SelectedCharity currentOrganization={currentOrganization}/>
          </div>
      </>
      : ""
    );
}

export default Homepage;
