import React from "react";
import "./filter.styles.scss"

export default function Filter() {
    return(
        <div className="filter">
            <select>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}