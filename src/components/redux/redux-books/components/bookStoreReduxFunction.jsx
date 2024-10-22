import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, Outlet } from 'react-router-dom';

import BookItemReduxFunction from './bookItemReduxFunction';
import fetchAllBookActionCreator from '../actions/fetchAllBooksActionCreator';
import deleteBookActionCreator from '../actions/deleteBookActionCreator';

function BookStoreReduxFunction(props) {  
    const navigate = useNavigate();
    const loadData = () => props.fetchAllBookProps();

    useEffect(()=>{loadData()},[]);

    const renderBookStore = ()=>{
        return (props.allBooksProps.map((eachBook)=>(
            <BookItemReduxFunction 
                key={eachBook.id} 
                bookData={eachBook} 
                onDelete={handleDelete}
                onView={handleView}></BookItemReduxFunction>
        )))
    }

    const handleDelete = (book)=>{
        props.deleteBookProps(book.id);
        loadData();
    }

    const handleView = (book)=>{
        navigate(`book-view-redux/${book.id}`);
    }

    return ( 
        <React.Fragment>
                <h2>Book Store</h2>
                <div><Link className="btn btn-success m-3" to='/book-add-redux'>ADD NEW BOOK</Link></div>
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

const mapStateToProps = (state) => {
    return {
        allBooksProps: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllBookProps: ()=>dispatch(fetchAllBookActionCreator()),
        deleteBookProps: (bookId)=>dispatch(deleteBookActionCreator(bookId))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(BookStoreReduxFunction);


    

    

 
 

