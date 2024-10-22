import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import BookItemHttpFunction from "../books-function-http/bookItemHttpFunction";

function BookStoreHttpFunction(props) {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {loadBookData()},[]);

  const loadBookData=()=>{
    fetch("http://localhost:4000/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllBooks(data);
      })
      .catch((err) => console.log(err));
  }

  const renderBookStore = ()=>{
    return allBooks.map((eachBook) => (
      <BookItemHttpFunction
        key={eachBook.id}
        bookData={eachBook}
        onDelete={() => handleRemove(eachBook)}
        onView={() => handleView(eachBook)}
      ></BookItemHttpFunction>
    ));
  };

  const handleView = (book)=>{
    navigate(`book-view-http/${book.id}`);
  };

  const handleRemove = (book)=>{
    console.log(book);
    fetch(`http://localhost:4000/books/${book.id}`, {
      method: "DELETE",
    })
      .then((response) => loadBookData())
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <h2>Book Store</h2>
      <div>
        <Link className="btn btn-success m-3" to="/book-add-http">
          ADD NEW BOOK
        </Link>
      </div>

      <Outlet></Outlet>
      <table className="table table-striped">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>COST</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderBookStore()}</tbody>
      </table>
    </React.Fragment>
  );
}

export default BookStoreHttpFunction;
