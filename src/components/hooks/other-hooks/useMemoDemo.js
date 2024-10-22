import React, { useState, useMemo } from 'react';

function UseMemoDemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne+1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo+1);
    }

    // if you want to cache the result/return value of a function use useMemo
    const isEven = useMemo(() => {
            let i = 0;
            while(i< 2000000000) i++; // purposefully slowing down the speed of execution of this function
            return counterOne % 2 === 0;    
        }, [counterOne]
    )

    // const isEven = () => {
    //     let i = 0;
    //     while(i< 2000000000) i++; // purposefully slowing down the speed of execution of this function
    //     return counterOne % 2 === 0;    
    // }

    return ( <div className="container m-5 p-5">
        <h2>useMemo Hook</h2>
        <button type="button" onClick={incrementOne} className="btn btn-primary">Count One - {counterOne}</button>
        {/* <span>{isEven()?'Even':'Odd'}</span> */}
        <span>{isEven?'Even':'Odd'}</span>
        <div></div>
        <button type="button" onClick={incrementTwo} className="btn btn-warning">Count Two - {counterTwo}</button>
    </div> );
}

export default UseMemoDemo;