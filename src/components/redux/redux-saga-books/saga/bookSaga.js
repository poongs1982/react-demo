
import {takeEvery, put} from 'redux-saga/effects';
import { ADD_BOOK, DELETE_BOOK, FETCH_ALL_BOOK, FETCH_A_BOOK } from '../actions/actionTypes';
import setFetchAllBookActionCreator from '../actions/setFetchAllBooksActionCreator';
import setFetchABookActionCreator from '../actions/setFetchABookActionCreator';

function* getAllBooks(){
    console.log("getAllBooks saga called")
    let data = yield fetch('http://localhost:4000/books');
    data = yield data.json();
    yield put(setFetchAllBookActionCreator(data));
    console.log("data by saga:", data);
}

function* getABook(bookId){
    console.log("getABook saga called")
    let data = yield fetch('http://localhost:4000/books/'+bookId);
    data = yield data.json();
    yield put(setFetchABookActionCreator(data));
    console.log("data by saga:", data);
}

function* deleteBook(action){
    console.log("deleteBook saga called", action)
    yield fetch("http://localhost:4000/books/"+action.payload,{method: "DELETE"});
    yield getAllBooks()
}

function* addBook(action){
    console.log("addBook saga called", action.payload);
    let data = yield fetch("http://localhost:4000/books",
    {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    yield getAllBooks();
    console.log("data by saga:", data);
}

function* bookSaga(){
    yield takeEvery(FETCH_ALL_BOOK, getAllBooks);
    yield takeEvery(FETCH_A_BOOK, getABook);
    yield takeEvery(ADD_BOOK, addBook);
    yield takeEvery(DELETE_BOOK, deleteBook);
}

export default bookSaga;