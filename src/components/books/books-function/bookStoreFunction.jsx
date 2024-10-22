import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import BookItemFunction from './bookItemFunction';



function BookStoreFunction() {
    const navigate = useNavigate();
    
    const [allBooks, setAllBooks] = useState([
        {
            "id": 101,
            "bookTitle": "Harry Potter and the Order Of Phoenix",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "200",
            "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
          },
          {
            "id": 102,
            "bookTitle": "Harry Potter and the Sorcerers' Stone",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "300",
            "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
    ]);

    const renderBookStore = ()=>{
        return (allBooks.map((eachBook)=>(
            <BookItemFunction 
                key={eachBook.id} 
                bookData={eachBook} 
                onDelete={()=>handleRemove(eachBook)}
                onView={()=>handleView(eachBook)}></BookItemFunction>
        )))
    }

    const handleView = (book)=>{
        navigate(`book-view/${book.id}`);
    }

    const handleRemove = (book)=>{
        console.log(book);
        setAllBooks(allBooks.filter((eBook)=>(eBook.id!=book.id)));
    }

    return ( 
        <React.Fragment>
                <h2>Book Store</h2>
                <div><Link className="btn btn-success m-3" to='/book-add'>ADD NEW BOOK</Link></div>
                <div><Link className="btn btn-warning m-3" to='/book-store'>CLEAR VIEW</Link></div>
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
                    <tbody>
                        { renderBookStore() }
                    </tbody>
                </table>
            </React.Fragment>
     );
}

export default BookStoreFunction;


    

    

 
 

