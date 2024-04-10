import React, { useEffect, useState } from 'react'

function Functioneffect() {
    let [count, setcount] =useState(0)
    let [name, setName] =useState("vaishnavi")

    // useEffect( ()=>{
    //     console.log("hello i am useeffect" + count)

    // },[] ) //after giving [] brackets it work as componentdidmount
    useEffect( ()=>{
        console.log("hello i am useeffect" + count)

    },[count] )
    useEffect( ()=>{
        console.log("hello i am useeffect" + name)

    },[name] )
  return (
    <div>
      <h1>UseEffect</h1>
      <h2>{count}</h2>
      <h2>{name}</h2>
      <button onClick={()=>setcount(count+1)}>click me</button>
      <button onClick={()=>setName(name="pallavi")}>update name</button>
    </div>
  )
}

export default Functioneffect;
