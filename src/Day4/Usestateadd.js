import { useState } from "react"

const Usestateadd =({number1, number2}) =>{
    const [result, setResult] = useState(0);

    const Addition =()=>{
        setResult(number1 + number2);
    };

    return (
        <div>
          <p>Number 1: {number1}</p>
          <p>Number 2: {number2}</p>
          <button onClick={Addition}>Add</button>
          <p>Result: {result}</p>
        </div>
      );
    };
    
    export default Usestateadd;