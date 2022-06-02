import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import crocLogo from "../images/crocLogo.png";

export default function Header() {
    return (
        <div className="">
            <div className="header">
                <Link to="/"><img src={crocLogo} className="crocLogo"></img></Link>
            </div>
        </div>
    )
}