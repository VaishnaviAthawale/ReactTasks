
import { useState } from 'react';

function OnChange() {
    const [value, setValue] = useState("HTML");

    function handleChange(e) {
        setValue(e.target.value);
    }
  return (
    <div>
    <h1>OnChange event</h1>
      <select value={value} onChange={handleChange}>
        <option value={"HTML"}>HTML</option> 
        <option value={"CSS"}>CSS</option> 
        <option value={"JAVASCRIPT"}>JAVASCRIPT</option> 
      </select>
      <div>User Input:- {value}</div>
    </div>
  );
}

export default OnChange;
