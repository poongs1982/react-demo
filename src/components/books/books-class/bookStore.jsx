import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import BookItem from './bookItem';


class BookStoreClass extends Component {
    state = { 
        allBooks: [
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
        ]
     } 

    render() { 
        return (
            <React.Fragment>
                <h2>Book Store</h2>
                {/* <div><button className="btn btn-success" onClick={()=>this.handleAddNewBook()}>ADD NEW BOOK</button></div> */}
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
                        { this.renderBookStore() }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    renderBookStore(){
        // return (this.state.allBooks.map((eachBook)=>(
        //     <tr key={eachBook.id}>
        //         <td>{ eachBook.id }</td>
        //         <td><img src={eachBook.bookImageUrl} width="150px" height="100px"></img></td>
        //         <td>{ eachBook.bookTitle }</td>
        //         <td>{ eachBook.bookAuthor }</td>
        //         <td>{ eachBook.bookGenre }</td>
        //         <td>{ eachBook.bookCost }</td>
        //         <td><button className="btn btn-primary btn-sm">Edit</button></td>
        //         <td><button className="btn btn-danger btn-sm" onClick={()=>this.handleRemove(eachBook)}>Remove</button></td>
        //     </tr>
        // )));
        return (this.state.allBooks.map((eachBook)=>(
            <BookItem 
                key={eachBook.id} 
                bookData={eachBook} 
                onDelete={()=>this.handleRemove(eachBook)}
                onView={()=>this.handleView(eachBook)}></BookItem>
        )))
    }

    handleView = (book)=>{
        this.props.navigate('book-view');
    }

    handleRemove = (book)=>{
        console.log(book);
        let allBook = this.state.allBooks;
        allBook = allBook.filter((eBook)=>(eBook.id!=book.id));
        this.setState({allBooks: allBook});
    
    }

    // handleAddNewBook = () =>{
    //     console.log(this.props);
    //    this.props.navigate('/book-add');
    // }
}
 
function BookStore() {
    const navigate=useNavigate()
    return(
        <BookStoreClass navigate={navigate}></BookStoreClass>
    );

}

export default BookStore;