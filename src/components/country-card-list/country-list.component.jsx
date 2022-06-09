import React from "react";
import "./country-list.styles.scss"
import CountryLayout from "../country-display/country.component"


export default function CountryList(props) {
    const countryDetails = props.country.map(countries => 
        <CountryLayout
        flag={countries.flags.png}
        name={countries.name.official} 
        capital={countries.capital} 
        region={countries.region}
        population={countries.population} 
        key={countries.name.official}
        darkmode={props.darkmode}
        />

    )

    return(
        <div className="country-list">
            {countryDetails}
        </div>
    )
}