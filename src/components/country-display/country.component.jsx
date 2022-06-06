import React from "react";
import "./country.styles.scss"

export default function CountryLayout(props) {
    return(
        <div className="country-layout">
            <div className="img-container">
                <img src={props.flag} className="flag" alt="FLAG" />
            </div>
            <h1 className="country-name">{props.name}</h1>
            <div className="country-population">
                Population:
                <span className="population">{props.population}</span>
            </div>
             <div className="country-region">
                 Region:
                 <span className="region">{props.region}</span>
            </div>
            <div className="country-capital">
                Capital:
                <span className="capital">{props.capital}</span>
            </div>
            
        </div>
    )
}
