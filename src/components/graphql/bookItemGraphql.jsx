function BookItemGraphql(props) {
    let eachBook = props.bookData;
    return ( 
        <tr key={eachBook.id}>
                 <td>{ eachBook.id }</td>
                 <td><img src={eachBook.bookImageUrl} width="150px" height="100px"></img></td>
                 <td>{ eachBook.bookTitle }</td>
                 <td>{ eachBook.bookAuthor }</td>  
                 <td>{ eachBook.bookGenre }</td>
                 <td>{ eachBook.bookCost }</td>
                 <td><button className="btn btn-primary btn-sm">Edit</button></td>
                 <td><button className="btn btn-danger btn-sm" onClick={()=>props.onDelete(eachBook)}>Remove</button></td>
                 <td><button className="btn btn-warning btn-sm" onClick={()=>props.onView(eachBook)}>View</button></td>
             </tr>
        );
}

export default BookItemGraphql;