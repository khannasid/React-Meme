import React from "react";
import '../css/Nav.css'
export default function Nav(){
    return(
        <nav className="Nav">
            <div className="logo-container">
                <img src="../../public/images/face.png" alt="" />
                <h2>Meme Downloader</h2>
            </div>
            <div className="course">
            <h3>
                ReactCourse - Project 3
            </h3>
            </div>
        </nav>
    )
};