import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    notes: "", // Set the initial state as an empty string
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${id}`);
        setFormData({
          notes: response.data.notes, // Set the initial state with the fetched notes
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8000/${id}`, formData);
      navigate("/"); // Redirect to home or any other page after successful update
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="updatebook">
      <form  onSubmit={handleSubmit}>
        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </label>
        <br/>
        <button type="submit">Update</button>
      </form>
     
    </div>
  );
}
