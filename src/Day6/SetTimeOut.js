import React, { useState, useEffect } from 'react';

function SetTimeOut() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      // Cleanup function to clear the timeout when the component unmounts or when seconds reach 0
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Seconds Remaining: {seconds}</p>
    </div>
  );
}

export default SetTimeOut;
