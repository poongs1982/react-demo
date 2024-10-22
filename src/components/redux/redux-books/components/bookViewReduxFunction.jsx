import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import fetchAllBooksActionCreator from '../actions/fetchAllBooksActionCreator';

//const fetchABookActionCreator = fetchABookActionCreator;

function BookViewReduxFunction(props) {
    const params = useParams();
    const [eachBook, setEachBook] = useState({});
    
    useEffect(()=>{
        props.fetchAllBookProps();
        let getBook = props.allBooksProps.filter((eBook)=>eBook.id==params.bookId)[0]
        setEachBook({...getBook})
        },[params.bookId])

    return ( 
        
        <div className="container my-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h5>Book Details</h5>
                </div>
                <div className="card-body">
                        <p>Book ID: {eachBook.id}</p>
                        <p>Book Title: {eachBook.bookTitle}</p>
                        <p>Book Author: {eachBook.bookAuthor}</p>
                        <p>Book Genre: {eachBook.bookGenre}</p>
                        <p>Book Cost: {eachBook.bookCost}</p>
                </div>
                <div className="card-footer bg-warning">
                    <Link className="btn btn-light btn-sm text-warning" to="/book-store-redux">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        allBooksProps: state.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchAllBookProps: ()=>{dispatch(fetchAllBooksActionCreator())}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(BookViewReduxFunction);