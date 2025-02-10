import React, { useState, useEffect } from 'react';

const Mode = () => {
  const savedMode = localStorage.getItem('mode') || 'light';
  const [mode, setMode] = useState(savedMode);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{
      background: mode === 'light' ? 'white' : 'black',
      color: mode === 'light' ? 'black' : 'white',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <button onClick={toggleMode} style={{ padding: '10px', fontSize: '16px' }}>
        {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

export default Mode;
