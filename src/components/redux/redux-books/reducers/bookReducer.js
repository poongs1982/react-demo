import { ADD_BOOK, DELETE_BOOK, FETCH_A_BOOK, FETCH_ALL_BOOK } from "../actions/actionTypes"

const initialState = {
    data: [],
    error: ''
}

const handleFetchAllBook = (state, action)=>{
    if(state.data.length==0){
        return{
            ...state,
            data: [...action.payload]
        }
    }else{
        return state;
    }
}

const handleAddBook = (state, action)=>{
    return {
        ...state,
        data: [...state.data, action.payload]
    }
}

const handleFetchABook = (state, action)=>{
    console.log(state.data.filter((eachBook)=>{
        console.log(eachBook.id)
        console.log(eachBook.id==action.payload)
        return eachBook.id==action.payload
    }))
    return {
        ...state,
        data: state.data.filter((eachBook)=>eachBook.id==action.payload)
    }
}

const handleDeleteBook = (state, action)=>{
    return {
        ...state,
        data: state.data.filter((eachBook)=>eachBook.id!=action.payload)
    }
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_BOOK:
            return handleFetchAllBook(state, action);
        case ADD_BOOK:
            return handleAddBook(state, action);   
        case FETCH_A_BOOK:
            return handleFetchABook(state, action);  
        case DELETE_BOOK:
            return handleDeleteBook(state, action);     
        default:
            return state;
    }
}

export default bookReducer;