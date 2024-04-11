import React from 'react'
import { useEffect } from 'react'

function Onkeypress() {
//   useEffect(() => {
// document.addEventListener('keydown', detectKeyDown, true)
//   },[])
  const detectKeyDown=(e)=>{
   console.log("clicked Key", e.key)
  }
  const functionClick=(e)=>{
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>Detect Key press</h1>
      <label>Enter Any key : </label>
      <input onChange={functionClick } type ="text"></input>
    </div>
  )
}

export default Onkeypress;
