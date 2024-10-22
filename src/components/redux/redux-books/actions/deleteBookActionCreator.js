import { DELETE_BOOK } from "./actionTypes";

const deleteBookActionCreator = (bookId) =>{
    return ({
        type: DELETE_BOOK,
        payload: bookId
    })
}

export default deleteBookActionCreator;