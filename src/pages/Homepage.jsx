import "./Homepage.scss";
import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";

function Homepage() {
    //Define API
    const api = "http://localhost:5000";

    //Define use state variables using useState hooks
    const [organizations, setOrganizations] = useState([]); //all organizations

    // Define useEffect to get all organizations from our json api
    useEffect(() => {
        getOrganizations();
    }, []);

    // Define function to get all videos from the API
    function getOrganizations() {
        axios
            .get(`${api}/organization`)
            .then((response) => {
                setOrganizations(response.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            })
    };

    return (
        <div className="homepage">
            <Hero />
        </div>
    );
}

export default Homepage;
