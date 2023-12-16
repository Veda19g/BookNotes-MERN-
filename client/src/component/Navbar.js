import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

return(
    <nav className="navbar">
        <Link className="nav-link" to={"/"}>BookNotes</Link>
        <Link  className="nav-link" to={"/addBook"}>Add a Book</Link>
    </nav>
)

}