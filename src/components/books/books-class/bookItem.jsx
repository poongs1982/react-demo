import React, { Component } from 'react';

class BookItem extends Component {
    state = { 
        eachBook: this.props.bookData
     } 

    render() { 
        let {eachBook} = this.state;
        //console.log('props:', this.props.bookData);
        return (
            <tr key={eachBook.id}>
                 <td>{ eachBook.id }</td>
                 <td><img src={eachBook.bookImageUrl} width="150px" height="100px"></img></td>
                 <td>{ eachBook.bookTitle }</td>
                 <td>{ eachBook.bookAuthor }</td>
                 <td>{ eachBook.bookGenre }</td>
                 <td>{ eachBook.bookCost }</td>
                 <td><button className="btn btn-primary btn-sm">Edit</button></td>
                 <td><button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(eachBook)}>Remove</button></td>
                 <td><button className="btn btn-warning btn-sm" onClick={()=>this.props.onView(eachBook)}>View</button></td>
             </tr>
        );
    }

   
}
 
export default BookItem;