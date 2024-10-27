import React from "react";
import './navbar.css'; // Ensure your CSS file is imported
import AlumnarLogo from "./Alumnar_logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <img src={AlumnarLogo} alt="Alumnar Logo" className="navbar-logo" /> {/* Ensure logo path is correct */}
                <a className="navbar-brand fw-bold" href="/">Alumnar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="/">Financial Aid</a>
                        <a className="nav-link" href="/">Events</a>
                        <a className="nav-link" href="/">Contact Us</a>
                        {/* Change the button classes here */}
                        <a className="nav-link btn grey-button text-white border border-dark ms-3" href="/">Sign Up</a>
                        <a className="nav-link btn btn-primary text-black border border-dark ms-2" href="/">Sign In</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
