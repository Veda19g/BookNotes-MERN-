import React from "react";
import { useState } from "react";
import axios from "axios";




export default function Addbook(){

   const [formData,setFormData]=React.useState({
    title:"",
    author:"",
    rating:"",
    date:"",
    notes:""
   })
    

   const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
   }

   const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to the server with the form data
      await axios.post("http://localhost:8000/addBook", formData);
      console.log("Book added successfully!");
  
      // Reset the form after successful submission
      setFormData({
        title: "",
        author: "",
        rating: "",
        date: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

    return(
      
      <div className="addbook-form">
      <form onSubmit={handleSubmit}>
          <label>
              Title:
              <input 
                 type="text"
                 name="title"
                 value={formData.title}
                 onChange={handleInputChange}
              />
          </label>
          <br />
          <label>
              Author:
              <input 
                 type="text"
                 name="author"
                 value={formData.author}
                 onChange={handleInputChange}
              />
          </label>
          <br />
          <label>
              Rating:
              <input 
                 type="text"
                 name="rating"
                 value={formData.rating}
                 onChange={handleInputChange}
              />
          </label>
          <br />
           <label>
              DateRead:
                <input
                   type="date"
                   name="date"
                   value={formData.date}
                   onChange={handleInputChange}
                />
           </label>
           <br />
           <label>
              Notes:
              <textarea
        name="notes"
        value={formData.notes}
        onChange={handleInputChange}
        className="notes-input"
      ></textarea>
           </label>
           <br />
  <button type="submit">Add Book</button>
      </form>
  </div>
       
    )
}