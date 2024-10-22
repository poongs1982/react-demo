import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

function BookViewHttpFunction() {
    const params = useParams();
    const [book, setBook] = useState({});
    

    useEffect(()=>{
        fetch(`http://localhost:4000/books/${params.bookId}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setBook(data)
            })
            .catch((err)=>console.log(err))
    },[params.bookId])

    return ( 
        
        <div className="container my-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h5>Book Details</h5>
                </div>
                <div className="card-body">
                        <p>Book ID: {book.id}</p>
                        <p>Book Title: {book.bookTitle}</p>
                        <p>Book Author: {book.bookAuthor}</p>
                        <p>Book Genre: {book.bookGenre}</p>
                        <p>Book Cost: {book.bookCost}</p>
                </div>
                <div className="card-footer bg-warning">
                    <Link className="btn btn-light btn-sm text-warning" to="/book-store-http">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

export default BookViewHttpFunction;