import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the time every second
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Format the time to display hours, minutes, and seconds
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Simple Clock</h1>
      <p>Current Time: {formattedTime}</p>
    </div>
  );
}

export default Clock;
