import { ADD_BOOK, DELETE_BOOK, SET_FETCH_A_BOOK, SET_FETCH_ALL_BOOK} from "../actions/actionTypes"

const initialState = {
    data: [],
    error: ''
}

const handleSetFetchAllBook = (state, action)=>{
    return{
        ...state,
        data: [...action.payload]
    }
}

const handleAddBook = (state, action)=>{
    return {
        ...state,
    }
}

const handleFetchABook = (state, action)=>{
    return {
        ...state,
        data: action.payload
    }
}

const handleDeleteBook = (state, action)=>{
    return {
        ...state
    }
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FETCH_ALL_BOOK:
            return handleSetFetchAllBook(state, action);
        case ADD_BOOK:
            return handleAddBook(state, action);  
        case SET_FETCH_A_BOOK:
            return handleFetchABook(state, action);  
        case DELETE_BOOK:
            return handleDeleteBook(state, action);     
        default:
            return state;
    }
}

export default bookReducer;