import React, { useReducer } from 'react';

const initialState = 0;
const reducerFunction = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function UseReducerDemo() {
   const [count, dispatch] = useReducer(reducerFunction, initialState);
   return ( <div className="container m-5 p-5">
        <h2> Counter - to demonstrate useReducer hook </h2>
        <h4>Count : {count}</h4>
        <button className="btn btn-primary" onClick={()=>dispatch('reset')}>Reset</button>
        <button className="btn btn-danger" onClick={()=>dispatch('increment')}>Increment</button>
        <button className="btn btn-success" onClick={()=>dispatch('decrement')}>Decrement</button>
    </div> );
}

export default UseReducerDemo;