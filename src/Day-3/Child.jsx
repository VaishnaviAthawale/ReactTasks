import React from "react";

const Child =(props) =>{
    return(
        <div>
            <h3>I am child  {props.name},  {props.channel}</h3>
        </div>
    )
}
export default Child;