import { BUY_CHOCOLATE } from "../actions/actionTypes";

const initialChocolateState = {
    numOfChocolates: 30
}

const chocolatesReducer = (state = initialChocolateState, action) => {
    switch(action.type){
        case BUY_CHOCOLATE:
            return {
                numOfChocolates: state.numOfChocolates - 1
            }
        default:
            return state;
    }
}

export default chocolatesReducer;