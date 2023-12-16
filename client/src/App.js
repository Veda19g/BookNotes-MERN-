import React from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Addbook from "./component/Addbook";
import Booklist from "./component/Booklist";
import Book from "./component/Book"
import UpdateBook from "./component/UpdateBook";
export default function App() {
  return (
    <>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="addBook" element={<Addbook />} />
      <Route path="/book/:id" element={<Book/>}/>
      <Route path="/updatebook/:id" element={<UpdateBook/>}/>
    </Routes>
    </>
  );
}
