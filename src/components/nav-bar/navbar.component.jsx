import React from "react";
import "./navbar.style.scss"

export default function Navbar (props) {
    return (
        <div className={props.darkmode ? "nav-bar" : "nav-bar-light"}>
            <h1 className={props.darkmode ? "nav-title" : "nav-title-light"}>where in the world ?</h1>
            <div className="mode-toogle">
            <ion-icon name="moon" className={props.darkmode ? "nav-icon" : "nav-icon-light"}></ion-icon>
            <span className={props.darkmode ? "mode-caption" : "mode-caption-light"} onClick={props.onClick}>{props.darkmode ? "Light Mode" : "Dark Mode "}</span>
            </div>
            
        </div>
    )
}