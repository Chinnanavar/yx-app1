import React, { useEffect, useState } from 'react';

const AutoCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return <p>Counter Updated: {count}</p>;
};

export default AutoCount;
