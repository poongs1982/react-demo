import React, { useState } from 'react';

function TestingCounter({initialCount=0}) {
    const [count, setCount] = useState(initialCount);

    const handleReset = ()=> setCount(0);
    const handleIncrement = () => setCount((prevCount)=>prevCount+1)
    const handleDecrement = () => setCount((prevCount)=>prevCount-1)
    const handleIncrementBy5 = () =>{
        for(let i=0; i<5; i++){
            setCount((prevCount)=>prevCount+1);
        }
     }

    return ( <div className='container m-5'>
        <h2> Counter Demo for testing </h2>
        <h4>Count : <h3 data-testid="count">{count}</h3></h4>
        <button className="btn btn-primary" onClick={handleReset}>Reset</button>
        <button className="btn btn-danger" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-success" onClick={handleDecrement}>Decrement</button>
        <button className="btn btn-primary" onClick={handleIncrementBy5}>Increment By 5</button>
    </div> );
}

export default TestingCounter;