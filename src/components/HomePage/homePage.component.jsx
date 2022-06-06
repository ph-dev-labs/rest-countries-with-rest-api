import {React, useEffect, useState }from "react";
import "./homePage.styles.scss"
import Navbar from "../nav-bar/navbar.component"
import SearchField from "../search-field/search-field.component";
import Filter from "../filter/filter.component";
import CountryList from "../country-card-list/country-list.component";

export default function HomePage() {

    const [allCountries, setAllCountries] = useState([])
    const [searchField, setSearchField] = useState("")
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setAllCountries(data))
    })


    function onSearchChange(event) {
        setSearchField({searchField: event.target.value})
    }



    const filteredContries = allCountries.filter(countries => 
        countries.name.official.includes(searchField.toLowerCase())
    )


   


    return(
        <div className="home-page">
            <Navbar />
            <div className="filter-section">
                <SearchField onSearchChange={onSearchChange}/>
                <Filter />
            </div>
            <CountryList country={filteredContries} />
        </div>
    )
}
