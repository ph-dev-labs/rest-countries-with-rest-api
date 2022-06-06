import {React}from "react";
import "./search-field.styles.scss"


export default function SearchField(props) {
    return(
        <div className="search">
            <form>
                <div className="form">
                    <ion-icon name="search"></ion-icon>
                    <input  type="search"   
                    placeholder="search for a country" 
                    className="search-field"
                    onChange={props.onSearchChange}
                    />
                </div>
               
            </form>
        </div>
    )
}