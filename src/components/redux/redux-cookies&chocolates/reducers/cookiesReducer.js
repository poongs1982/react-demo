import { BUY_COOKIE } from "../actions/actionTypes"

const initialCookiesState = {
    numOfCookies: 20
}

const cookiesReducer = (state = initialCookiesState, action) => {
    switch(action.type){
        case BUY_COOKIE:
            return {
                numOfCookies: state.numOfCookies - 1
            }
        default:
            return state;
    }
}

export default cookiesReducer;