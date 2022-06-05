import React from "react";
import "./search-field.styles.scss"

export default function SearchField() {
    return(
        <div className="search">
            <form>
                <div className="form">
                    <ion-icon name="search"></ion-icon>
                    <input  type="text" name="name"  placeholder="search for a country" className="search-field"/>
                </div>
               
            </form>
        </div>
    )
}