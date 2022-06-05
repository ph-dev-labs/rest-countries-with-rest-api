import React from "react";
import "./navbar.style.scss"

export default function Navbar () {
    return (
        <div className="nav-bar">
            <h1 className="nav-title">where in the world ?</h1>
            <div className="mode-toogle">
            <ion-icon name="moon" className="nav-icon"></ion-icon>
            <span className="mode-caption">Dark Mode</span>
            </div>
            
        </div>
    )
}