
import { useState } from "react";

let Mycomponent = (props)=>{
    return(
        <>
            <h2>{props.state}</h2>
            <button onClick={props.counter}>Click me</button>
        </>
    )
}

let Mycomponent =()=>{
    let [State, setState]
}