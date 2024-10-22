import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'

function BookViewGraphql() {
    const params = useParams();
    const [book, setBook] = useState({});
    
    const GET_BOOK = gql`
    query GetBookById($bookId: ID!){
        getBook(id: $bookId){
          id, bookTitle, bookAuthor, bookGenre, bookCost, bookImageUrl
        }
      }
    `
    const { error, loading, data } = useQuery(GET_BOOK, {variables: { bookId: params.bookId }});

    console.log("data:" , data);
    useEffect(() => {
        if(data){
            setBook(data.getBook);
        }
    },[data]);


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
                    <Link className="btn btn-light btn-sm text-warning" to="/root-book-graphql/book-store-graphql">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

export default BookViewGraphql;