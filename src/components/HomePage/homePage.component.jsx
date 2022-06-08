import {React, useEffect, useState }from "react";
import "./homePage.styles.scss"
import Navbar from "../nav-bar/navbar.component"
import SearchField from "../search-field/search-field.component";
import Filter from "../filter/filter.component";
import CountryList from "../country-card-list/country-list.component";

export default function HomePage() {

    const [allCountries, setAllCountries] = useState([]);
    const [filteredContries, setFilteredContries] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [region, setRegion] = useState("");
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setAllCountries(data))
    }, [])

    useEffect(() => {
        console.log(region)
        const response =  allCountries.filter(countries => 
            searchField ? countries.name.official.toLowerCase().includes(searchField.toLowerCase())
            :
            countries.region === region
        )
        setFilteredContries(response)
    }, [region, searchField])
    


    function onSearchChange(event) {
        setSearchField(event.target.value);
    }

    function onRegionChange(event) {
        setRegion(event.target.value);
    }


   


    return(
        <div className="home-page">
            <Navbar />
            <div className="filter-section">
                <SearchField onSearchChange={onSearchChange}/>
                <Filter onChange={onRegionChange}/>
            </div>
            <CountryList country={filteredContries.length > 0 ? filteredContries: allCountries}/>
        </div>
    )
}
