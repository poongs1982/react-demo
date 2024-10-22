import { BUY_COOKIE } from "../actions/cookiesType";

const initialCookieState = {
    numOfCookies: 10
}

const cookiesReducer = (state = initialCookieState, action) => {
    switch(action.type){
        case BUY_COOKIE:
            return ({
                ...state, 
                numOfCookies: state.numOfCookies-1
            });
        default:
            return state; 
    }
}

export default cookiesReducer;