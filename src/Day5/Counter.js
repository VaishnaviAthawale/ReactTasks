import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
 console.log(count);

function CounterInc(){
  setCount(count+1);
}

function counterDec(){
  if(count !==0){
    setCount(count - 1);
  }
}
  const decreaseCounter = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(10);
    }
  }

  useEffect(()=>{
    let val= count;
    if(count > 20){
      alert("value is greate than 20");
      setCount(val);
    }
    if(count <= 0){
      alert("your count less than 0");
    }
  },[count]);
  

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={CounterInc}>Increase</button>
      <button onClick={counterDec}>Decrease</button>
    </div>
  );
}

export default Counter;