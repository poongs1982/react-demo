import { combineReducers } from "redux";
import cookiesReducer from "./cookiesReducer";
import chocolatesReducer from "./chocolateReducer";

const rootReducer = combineReducers({
    cookiesRed: cookiesReducer,
    chocolateRed: chocolatesReducer
})

export default rootReducer;