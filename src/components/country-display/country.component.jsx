import React from "react";
import "./country.styles.scss"

export default function CountryLayout(props) {
    console.log(props)
    return(
        <div className={props.darkmode ? "country-layout" : "country-layout-light"}>
            <div className="img-container">
                <img src={props.flag} className={props.darkmode ? "flag" : "flag-light"} alt="FLAG" />
            </div>
            <h1 className={props.darkmode ? "country-name" : "country-name-light"}>{props.name}</h1>
            <div className={props.darkmode ? "country-population" : "country-population-light"}>
                Population:
                <span className={props.darkmode ? "population" : "population-light" }>{props.population}</span>
            </div>
             <div className={props.darkmode ? "country-region" : "country-region-light"}>
                 Region:
                 <span className={props.darkmode ? "region" : "region-light"}>{props.region}</span>
            </div>
            <div className={props.darkmode ? "country-capital" : "country-capital-light"}>
                Capital:
                <span className={props.darkmode ? "capital" : "capital-light"}>{props.capital}</span>
            </div>
            
        </div>
    )
}
