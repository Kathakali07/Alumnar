import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import college from "./college_datas.jsx"
import { Card } from "react-bootstrap";

function Create_contact(college){
    return (
        <Card key={college.id} className="my-3">
            <Card.Img variant="top" src={college.image} alt={`${college.name} image`} />
            <Card.Body>
                <Card.Title>{college.name}</Card.Title>
                <Card.Text>{college.location}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function SearchBox() {
    return (
        <div className="box">
            <div className="Searchbar d-flex"> {/* Add d-flex class for Flexbox */}
                <h2>Search your College</h2>
                <FaSearch id="search-icon" className="large-icon" /> {/* Fixed the className quote */}
                <input type="search" placeholder="Search..." className="form-control" />
                <button >Search</button> 
            </div>

            <div className="college_names">
                <div className="college">
                    {college.map(Create_contact)}
                </div>
            </div>
            
        </div>
    );
}

export default SearchBox;
