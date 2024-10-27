import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import college from "./college_datas"
import { Card } from "react-bootstrap";

function Create_contact(college){
    return (
        <Card
            key = {college.id}
            name = {college.name}
            image = {college.image}
            location = {college.location}
        />
    );
}

function SearchBox() {
    return (
        <div className="box">
            <div className="Searchbar d-flex"> {/* Add d-flex class for Flexbox */}
                <h2>Search your College</h2>
                <FaSearch id="search-icon" className="large-icon" /> {/* Fixed the className quote */}
                <input type="search" placeholder="Search..." className="form-control" />
                <button type="submit" className="btn btn-primar">Search</button> {/* Added margin-start */}
            </div>

            <div className="college_names mt-10">
                <div className="college">
                    {college.map(Create_contact)}
                </div>
            </div>
            
        </div>
    );
}

export default SearchBox;
