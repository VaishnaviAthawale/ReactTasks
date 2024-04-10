import { useState } from "react";

const Spread =() =>{
    const[details,setDetails]= useState ({

        name: "jon ",
        age :30

    })
    const addProperty=()=>
    {
    setDetails({...details,lastName:"sina"})

    }
    return(
        <div>
        {console.table("DETAILS",details)}
            <button onClick={()=>addProperty()}>Add</button>
        </div>
    )
}

export default  Spread;