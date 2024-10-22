// STEPS TO WORK WITH REDUX OUTSIDE OF REACT
// -----------------------------------------
// 1. Install redux
//          npm install redux
// 2. Create this file with extension .js
// 3. Now we run this file outside of react using node, so make 
//              sure to navigate to the loaction of this file
// 4. Run this file with command 
//          node .\redux-demo-1



// EXPLAINATION
// Redux is a predictable state container for javascript applications
// Redux is not tied with react. It can be used with other applications 
//          like angular, vuejs etc
// THREE CORE CONCEPTS
// -------------------
// 1. Cookie Shop -------> Store --------> Holds the state of your application
// 2. Intention to BUY_COOKIE ---------> Action ---------> Decribes what happens
// 3. Shopkeeper ----------> Reducer ----------> Ties the Store and actions together, carries out the 
//                                                    state transition depending on the action

// THREE PRINCIPLES
// ------------------
// 1. The state of your whole application is stored in an object tree within a single store
// 2. The only way to change the state is to emit/dispatch an action, an object describing what happened
// 3. To specify how the state tree is tranformed by actions, you write pure reducers


//import redux from 'redux';
const redux = require('redux');

const createStore = redux.createStore;

// 1. define the action object
//        - actions are the only way your application can interact with the store
//        - actions are plain Javascript object with type property
//        - the type property indicates the type of action being performed
//        - the type property is typically defined as string constants

const BUY_COOKIE = 'BUY_COOKIE';

{
    type: BUY_COOKIE;
    info: 'First redux action'
}

// 2. define the action creator function 
//        - action creator creates an action
//        - in terms of code , action creator is a function that returns the action object

function buyCookie(){
    return {
        type: BUY_COOKIE,
        info: 'First redux action'
    }
}

// 3. define the reducer
//         - Specifies how the app's state changes in response to actions sent to the store
//         - actions only describe what happened, but don't describe how the app's state changes, reducers are incharge of that
//         - reducer is a function that takes previousState and action and returns the new state
//         = we dont mutate the previousState instead we return a new state object
//         - (prevState, action)=>newState

// this is the state, and pass this as the previous state to the reducer function as default value
const initialState = {
    numOfCookies: 10
}

const reducer = (state = initialState, action) => {
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

// 4. Implement the redux store
//      - brings the actions and reducers together
//      - one redux store for the entire application
//      - Responsibilities
//          - Holds application state
//          - allows access to state via getState()
//          - allows state to be updated via dispatch(action)
//          - registers listeners via subscribe(listener)
//          - handles unregistering of listeners via the function returned by subscribe(listener)
//      - include these 2 lines on the top
                // const redux = require('redux'); // use import while working with react
                // const createStore = redux.createStore;

// responsibility 1 - Holds application state, takes reducers function which has the intial state of the application 
const store = createStore(reducer); 

// responsibility 2 - allows access to state via getState()
console.log("Initial State: ", store.getState()); 

// responsilbility 4 - registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(()=>console.log("Updated State", store.getState())); 

// responsibility 3 - allows state to be updated via dispatch(action)
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 
store.dispatch(buyCookie()); 

// responsibility 5 - handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();
