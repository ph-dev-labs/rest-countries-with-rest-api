import React from "react";
import "./filter.styles.scss"

export default function Filter(props) {
    return(
        <div className={props.darkmode ? "filter" : "filter-light"}>
            <select onChange={props.onChange} className={props.darkmode ? "select" : "select-light"} >
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}