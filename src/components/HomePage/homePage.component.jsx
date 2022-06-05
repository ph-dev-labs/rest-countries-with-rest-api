import React from "react";
import "./homePage.styles.scss"
import Navbar from "../nav-bar/navbar.component"
import SearchField from "../search-field/search-field.component";

export default function HomePage() {
    return(
        <div className="home-page">
            <Navbar />
            <SearchField />
        </div>
    )
}
