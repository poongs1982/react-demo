// STEPS TO WORK WITH REDUX OUTSIDE OF REACT
// -----------------------------------------
// 1. Install redux
//          npm install redux
// 2. Create this file with extension .js
// 3. Now we run this file outside of react using node, so make sure to navigate to the loaction of this file
// 4. Run this file with command 
//          node .\redux-demo-2

//MULTIPLE REDUCERS - COMBINING REDUCERS
//same as redux-demo-1.js except that we have used combineReducers

//import redux from 'redux';
const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// 1. define the action object
const BUY_COOKIE = 'BUY_COOKIE';
const BUY_CHOCOLATE = 'BUY_CHOCOLATE';

{
    type: BUY_COOKIE;
    info: 'First redux action'
}

{
    type: BUY_CHOCOLATE;
}
// 2. define the action creator function 
function buyCookie(){
    return {
        type: BUY_COOKIE,
        info: 'First redux action'
    }
}

function buyChocolate(){
    return {
        type: BUY_CHOCOLATE
    }
}

// 3. define the reducer
const initialCookieState = {
    numOfCookies: 10
}

const initialChocolateState = {
    numOfChocolates: 10
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_COOKIE:
//             return ({
//                 ...state, // copying previous state at it might have other properties which we dont want to disturb/exclude in the newState
//                 numOfCookies: state.numOfCookies-1
//             });
//         default:
//             return state; // if no actions match return the state as it is
//     }
// }

const cookiesReducer = (state = initialCookieState, action) => {
    switch(action.type){
        case BUY_COOKIE:
            return ({
                ...state, // copying previous state at it might have other properties which we dont want to disturb/exclude in the newState
                numOfCookies: state.numOfCookies-1
            });
        default:
            return state; // if no actions match return the state as it is
    }
}

const chocolateReducer = (state = initialChocolateState, action) => {
    switch(action.type){
        case BUY_CHOCOLATE:
            return ({
                ...state, // copying previous state at it might have other properties which we dont want to disturb/exclude in the newState
                numOfChocolates: state.numOfChocolates-1
            });
        default:
            return state; // if no actions match return the state as it is
    }
}
// 4. Implement the redux store

// const store = createStore(reducer); 
const rootReducer = combineReducers({
    cookiesKey: cookiesReducer,
    chocolateKey: chocolateReducer
})
const store = createStore(rootReducer); 

// responsibility 2 - allows access to state via getState()
console.log("Initial State: ", store.getState()); 

// responsilbility 4 - registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(()=>console.log("Updated State", store.getState())); 

// responsibility 3 - allows state to be updated via dispatch(action)
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 
store.dispatch(buyChocolate()); 
store.dispatch(buyChocolate()); 
// responsibility 5 - handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
