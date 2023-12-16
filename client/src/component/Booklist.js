import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Booklist() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []); 


  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };



  return (
    <div className="booklist">
      <div className="booklist-heading">Book List</div>
      <div className="booklist-card">
      {books.map((book) => (
          <div className="booklist-card-single" key={book._id} onClick={() => handleBookClick(book._id)}>           
             <div className="booklist-title">{book.title}</div>
             <div className="booklist-author">🙎{book.author}</div>
             <div className="booklist-rating">⭐{book.rating}</div>
             <div className="booklist-date">📆Read On: {book.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
