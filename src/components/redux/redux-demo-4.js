// STEPS TO WORK WITH REDUX OUTSIDE OF REACT
// -----------------------------------------
// 1. Install redux
//          npm install redux
// 2. Create this file with extension .js
// 3. Now we run this file outside of react using node, so make sure to navigate to the loaction of this file
// 4. Run this file with command 
//          node .\redux-demo-4

// REDUX with hardcoded book array data - no middleware

const redux = require('redux');

const createStore = redux.createStore;

const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = "DELETE_BOOK";

const fetchAllBookActionCreator = () =>{
    return ({
        type: FETCH_ALL_BOOK,
        payload: [{
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
          }]
    })
}

const addBookActionCreator = () =>{
    return ({
        type: ADD_BOOK,
        payload: {
            "id": 103,
            "bookTitle": "Harry Potter and the Sorcerers' Stone",
            "bookAuthor": "J.K.Rowling",
            "bookGenre": "Fiction",
            "bookCost": "300",
            "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          }
    })
}

const deleteBookActionCreator = (bookId) =>{
    return ({
        type: DELETE_BOOK,
        payload: {
            bookId: bookId
        }
    })
}

const initialState = {
    data: [],
    error: ''
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_BOOK:
            return {
                ...state,
                data: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_BOOK:
            return {
                ...state,
                data: state.data.filter((eachBook)=>eachBook.id!=action.payload.bookId)
            }
        default:
            return state;
    }
}

const store = createStore(bookReducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(()=>{});
store.dispatch(fetchAllBookActionCreator());
console.log("State after fetchAllBook: ", store.getState());
store.dispatch(addBookActionCreator());
console.log("State after addBook: ", store.getState());
store.dispatch(deleteBookActionCreator(101));
console.log("State after deleteBook: ", store.getState());
unsubscribe();
