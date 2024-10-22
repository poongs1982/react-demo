import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import fetchABookActionCreator from '../actions/fetchABookActionCreator';

//const fetchABookAction = fetchABookActionCreator;

function BookViewReduxSagaFunction(props) {
    const params = useParams();
    
    useEffect(()=>{
            props.fetchABookProps(params.bookId);
        },[params.bookId])

    return ( 
        
        <div className="container my-5">
            <div className="card">
                <div className="card-header bg-warning text-white">
                    <h5>Book Details</h5>
                </div>
                <div className="card-body">
                        <p>Book ID: {props.eachBookProps.id}</p>
                        <p>Book Title: {props.eachBookProps.bookTitle}</p>
                        <p>Book Author: {props.eachBookProps.bookAuthor}</p>
                        <p>Book Genre: {props.eachBookProps.bookGenre}</p>
                        <p>Book Cost: {props.eachBookProps.bookCost}</p>
                </div>
                <div className="card-footer bg-warning">
                    <Link className="btn btn-light btn-sm text-warning" to="/book-store-redux-saga">CLOSE VIEW</Link>
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        eachBookProps: state.data
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchABookProps: (bookId)=>dispatch(fetchABookActionCreator(bookId))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(BookViewReduxSagaFunction);