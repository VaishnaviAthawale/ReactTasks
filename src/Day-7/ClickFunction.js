import React from 'react'

function ClickFunction() {
  function HelloFunction(){
    document.write("hello pune");
  }
function dblClick(){
    document.write("welcome to smart city");
}
  return (
    <div>
    <h2>Onclick and double click</h2>
   <input type="button" value="click" onClick={HelloFunction}></input>
   <input type="button" value="Doubleclick" onDoubleClick={dblClick}></input>

 </div>
  )
}

export default ClickFunction;
