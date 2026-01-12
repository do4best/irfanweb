import React, {createContext, useContext, useEffect} from "react";

 let BreateDark = createContext("")




function CreateDark() {
    let theme=useContext(BreateDark)
    useEffect(()=>{
        document.body.style.backgroundColor="black"
        return ()=>{
            document.body.style.backgroundColor="white"
        }
    },[theme])
    return(<></>)
}

export default CreateDark;
