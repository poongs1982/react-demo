import React, { useState , useEffect } from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocTitle2() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return ( <div>
        <div className="container m-5">
            <button className="btn btn-primary" onClick={()=>setCount(prevCount=>prevCount+1)}>Clicked {count} times</button>
        </div>
    </div> );
}

export default DocTitle2;