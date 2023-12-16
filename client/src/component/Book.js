import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate(); // Corrected hook name
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/${id}`);
      // Redirect to a different page or perform other actions after successful deletion
      navigate('/'); // Example: Redirect to the books list page
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
    
  const handleUpdate=()=>{
    navigate(`/updatebook/${id}`);
  }



  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-div" >
      <div className="book-div-head">You Can View your notes here👁️👁️</div>
      
      <div className="book-card">
      <div className="book-card-buttons">
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="book-card-title">{book.title}</div>
      <div className="book-card-heading">Your Notes 📝📝:</div>
      <div className="book-card-notes">{book.notes}</div>
      </div>

    </div>
  );
}
