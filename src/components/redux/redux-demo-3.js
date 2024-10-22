// STEPS TO WORK WITH redux-logger OUTSIDE OF REACT
// -----------------------------------------
// 1. Install redux and redux-logger
//          npm install redux redux-logger
// 2. Create this file with extension .js
// 3. Now we run this file outside of react using node, so make sure to navigate to the loaction of this file
// 4. Run this file with command 
//      node .\redux-demo-3

// REDUX with applyMiddleware - logger
// same as redux-demo-2.js in addition with middleware logger
// Middleware is the suggested way to extend redux functionality
// Provides a third party extension point between dispatchingand action and 
            //the moment it reaches the reducer
// Use middleware for logging, crash reporting, performing asynchronous tasks etc


//import redux from 'redux';
const redux = require('redux');
const reduxLogger = require('redux-logger') // 1

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware; // 3
const logger = reduxLogger.createLogger(); // 2

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

const rootReducer = combineReducers({
    cookiesKey: cookiesReducer,
    chocolateKey: chocolateReducer
})

// 4. Implement the redux store
const store = createStore(rootReducer, applyMiddleware(logger)); //4 
console.log("Initial State: ", store.getState()); 
const unsubscribe = store.subscribe(()=>{}); //5 
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 
store.dispatch(buyChocolate()); 
store.dispatch(buyChocolate()); 
unsubscribe();
