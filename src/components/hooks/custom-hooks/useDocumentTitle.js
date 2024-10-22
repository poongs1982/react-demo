import { useEffect } from "react";

 function useDocumentTitle(count) {
    useEffect(()=>{
        document.title = `Clicked ${count} times!`
        console.log("useEffect - updated document title...")
    }, [count]) 
 }
 
 export default useDocumentTitle;