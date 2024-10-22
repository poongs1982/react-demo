import React, { useState, useEffect } from 'react';

function ApiDemo() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setPosts(data);
        })
        .catch((error)=>console.log(error));
    },[])
    return ( 
        <div className="container m-5">
            <ul className="list-group">
                {posts.map((eachPost)=><li key={eachPost.id} className="list-group">{eachPost.id} - {eachPost.title}</li>)}
        </ul>
        </div>
     );
}

export default ApiDemo;