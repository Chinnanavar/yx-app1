import React, { useState, useEffect } from 'react';

const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 5973) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1); 

    return () => clearInterval(interval);
  }, []);

  return <p>Number of Days: {count}</p>;
};

export default AutoCounter;
