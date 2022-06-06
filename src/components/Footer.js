import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footer">
                <ul>
                    <li><a href="/home">Links</a></li>
                    <li><a href="/map">Social Media</a></li>
                </ul>
                <p className="footerText">Copyright The Crocodile 2022</p>
            </div>
        </div>
    )
}