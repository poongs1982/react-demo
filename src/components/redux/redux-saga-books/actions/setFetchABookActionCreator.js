import { SET_FETCH_A_BOOK } from "./actionTypes";

const setFetchABookActionCreator = (data) =>{
  console.log("setFetchABookActionCreator called");
    return ({
        type: SET_FETCH_A_BOOK,
        payload: data
    })
}

export default setFetchABookActionCreator;