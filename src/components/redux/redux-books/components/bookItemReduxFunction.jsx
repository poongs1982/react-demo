function BookItemReduxFunction(props) {
    return ( 
            <tr key={props.bookData.id}>
                <td>{ props.bookData.id }</td>
                <td><img src={props.bookData.bookImageUrl} width="150px" height="100px"></img></td>
                <td>{ props.bookData.bookTitle }</td>
                <td>{ props.bookData.bookAuthor }</td>
                <td>{ props.bookData.bookGenre }</td>
                <td>{ props.bookData.bookCost }</td>
                <td><button className="btn btn-primary btn-sm">Edit</button></td>
                <td><button className="btn btn-danger btn-sm" onClick={()=>props.onDelete(props.bookData)}>Remove</button></td>
                <td><button className="btn btn-warning btn-sm" onClick={()=>props.onView(props.bookData)}>View</button></td>
            </tr> 
        );
}

export default BookItemReduxFunction;