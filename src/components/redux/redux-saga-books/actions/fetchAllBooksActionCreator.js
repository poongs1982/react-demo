import { FETCH_ALL_BOOK } from "./actionTypes";

const fetchAllBookActionCreator = () =>{
  console.log("fetchAllBookActionCreator called");
    return ({
        type: FETCH_ALL_BOOK
    })
}

export default fetchAllBookActionCreator;