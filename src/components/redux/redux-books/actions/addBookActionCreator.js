import { ADD_BOOK } from "./actionTypes";

const addBookActionCreator = (newBook) =>{
    return ({
        type: ADD_BOOK,
        payload: newBook
    })
}

export default addBookActionCreator;