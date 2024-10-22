import React, { useState } from 'react';

function UseStateFunction() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState({firstName: '', lastName: ''});
    const [nameList, setNameList] = useState([{id: 1, name: 'first name'}]);

    const handleIncrementBy5 = () =>{
        for(let i=0; i<5; i++){
            // setCount(count+1); // here setCount works on the stale value of count
                                    // so use the second form of setCount
                                    // do this for increment and cdecrement as well
            // use this when younhave to update the state value based on the previous state
            setCount((prevCount)=>prevCount+1);
        }
    }

    const handleSetNameList = () => {
        //setNameList([{id:nameList[nameList.length-1].id+1, name:"Test"}])
        setNameList([...nameList, {id:nameList[nameList.length-1].id+1, name:"Test"}])

    }

    return ( <div className='container m-5'>
        <h2> Counter 1 - to demonstrate useState</h2>
        <h4>Count : {count}</h4>
        <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Click</button>

        <h2> Counter 2 - to demonstare previous state value </h2>
        <h4>Count : {count}</h4>
        <button className="btn btn-primary" onClick={()=>setCount(initialCount)}>Reset</button>
        {/* <button className="btn btn-danger" onClick={()=>setCount(count+1)}>Increment</button> */}
        <button className="btn btn-danger" onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment</button>
        {/* <button className="btn btn-success" onClick={()=>setCount(count-1)}>Decrement</button> */}
        <button className="btn btn-success" onClick={()=>setCount((prevCount)=>prevCount+1)}>Decrement</button>
        <button className="btn btn-primary" onClick={handleIncrementBy5}>Increment By 5</button>

        <h2> Demo 3 - to demonstrate useState with objects </h2>
        <h4>First Name :{ name.firstName }</h4>
        <h4>Last Name :{ name.lastName }</h4>
        <div className='formGroup'>
            <label htmlFor='fName' className="form-label">First Name:</label>
            {/* <input type="text" className="form-control" id="fName" onChange={(e)=>setName({firstName: e.target.value})}></input> */}
            <input type="text" className="form-control" id="fName" onChange={(e)=>setName({...name, firstName: e.target.value})}></input>
        </div>
        <div className='formGroup'>
            <label htmlFor='lName' className="form-label">Last Name:</label>
            {/* <input type="text" className="form-control" id="lName" onChange={(e)=>setName({lastName: e.target.value})}></input> */}
            <input type="text" className="form-control" id="fName" onChange={(e)=>setName({...name, lastName: e.target.value})}></input>
        </div>

        <h2> Demo 4 - to demonstrate useState with arrays </h2>
        <ul className="list-group">
            {nameList.map((eachName)=><li key={eachName.id} className="list-group">{eachName.id} - {eachName.name}</li>)}
        </ul>
        <button className="btn btn-primary" onClick={handleSetNameList}>Add Name</button>
    </div> );
}

export default UseStateFunction;