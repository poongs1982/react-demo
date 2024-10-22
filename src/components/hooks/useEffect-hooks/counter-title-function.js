import React, { useState , useEffect } from 'react';

function CounterTitleFunction() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=>{
        document.title = `Clicked ${count} times!`
        console.log("useEffect - updated document title...")
    }, [count]) 

    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{ setX(e.clientX); setY(e.clientY)})
        console.log("event listener added...")
    },[])

    useEffect(()=>{
        return ()=>document.title = 'React App';
    },[])
    return ( <div>
        <div className="container m-5">
                <h3>X - {x} , Y - {y}</h3>
                <div className='formGroup'>
                    <label htmlFor='name' className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)}></input>
                 </div>
                <button className="btn btn-primary" onClick={()=>setCount(prevCount=>prevCount+1)}>Clicked {count} times</button>
        </div>
    </div> );
}

export default CounterTitleFunction;