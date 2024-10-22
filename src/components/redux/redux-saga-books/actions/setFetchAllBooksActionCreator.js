import { SET_FETCH_ALL_BOOK } from "./actionTypes";

const setFetchAllBookActionCreator = (data) =>{
  console.log("fetchAllBookActionCreator called");
    return ({
        type: SET_FETCH_ALL_BOOK,
        payload: data
    })
}

export default setFetchAllBookActionCreator;