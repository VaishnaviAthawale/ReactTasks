import { useState } from 'react';

function State() {
const[count, setcounter] = useState(0)
    function updateCount(){
          setcounter(count + 1)
    }
  return (
    <div>
      <h1>Button clicked {count} time</h1>
      <button onclick={updateCount}>click me</button>
    </div>
  );
}

export default State;
