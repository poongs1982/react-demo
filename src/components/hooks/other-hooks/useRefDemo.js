import React, { useEffect, useRef } from 'react';

// can access DOM nodes directly in function components using useRef
// in a login form we want the user name text to have the focus automatically when the component renders
function UseRefDemo() {

    const inputRef = useRef(null);

    useEffect(() => {
        // we want to focus the input element
        inputRef.current.focus(); 
    },[])
    return ( <div className="container m-5">
        <div className='formGroup'>
            <label htmlFor='uName' className="form-label">User Name:</label>
            <input type="text" ref={inputRef} className="form-control" id="uName"></input>
        </div>
        <div className='formGroup'>
            <label htmlFor='pass' className="form-label">Password:</label>
            <input type="text" className="form-control" id="pass"></input>
        </div>

    </div> );
}

export default UseRefDemo;