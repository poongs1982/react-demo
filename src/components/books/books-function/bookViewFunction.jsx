import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

function BookViewFunction() {
    const params = useParams();

    return ( 
        
        <div className="container my-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h5>Book Details</h5>
                </div>
                <div className="card-body">
                        <p>Book ID: {params.bookId}</p>
                </div>
                <div className="card-footer bg-warning">
                    <Link className="btn btn-light btn-sm text-warning" to="/book-store">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

export default BookViewFunction;