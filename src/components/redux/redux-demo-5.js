// STEPS TO WORK WITH REDUX OUTSIDE OF REACT
// -----------------------------------------
// 1. Install redux and redux-thunk and axios
//          npm install redux redux-thunk axios
// 2. Create this file with extension .js
// 3. Now we run this file outside of react using node, so make sure to navigate to the loaction of this file
// 4. Run this file with command 
//          node .\redux-demo-5

// REDUX with Redux thunk to fetch data from api using axios

const redux = require('redux');
const axios = require('axios'); // 1
const thunkMiddleware = require('redux-thunk').default; // 2

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware; // 3

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';
const FETCH_ALL_BOOK_SUCCESS = 'FETCH_ALL_BOOK_SUCCESS'; // 2
const FETCH_ALL_BOOK_FAILURE = 'FETCH_ALL_BOOK_FAILURE'; // 3

const fetchAllBookActionCreator = () =>{
    return ({
        type: FETCH_ALL_BOOK
    })
}

// 4
const fetchAllBookSuccessActionCreator = (allBooks) =>{
    return ({
        type: FETCH_ALL_BOOK_SUCCESS,
        payload: allBooks
    })
}

// 5
const fetchAllBookFailureActionCreator = (error) =>{
    return ({
        type: FETCH_ALL_BOOK_FAILURE,
        payload: error
    })
}

// 6 - Async action creator
const fetchAllBookActionCreatorMiddleware = () =>{
    return function(dispatch){
        dispatch(fetchAllBookActionCreator());
        axios.get("http://localhost:4000/books")
          .then((response) => {
            dispatch(fetchAllBookSuccessActionCreator(response.data))
          })
          .catch((err) => dispatch(fetchAllBookFailureActionCreator(err.message)));
    }
}

// 7
const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_BOOK:
            return {
                ...state,
                loading: true
            }
        case FETCH_ALL_BOOK_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_ALL_BOOK_FAILURE:
                return {
                    loading: false,
                    data: [],
                    error: action.payload
                }
        default:
            return state;
    }
}

const store = createStore(bookReducer, applyMiddleware(thunkMiddleware)); // 4

const unsubscribe = store.subscribe(()=>{console.log("State is: ", store.getState()); });
store.dispatch(fetchAllBookActionCreatorMiddleware()); // 9

