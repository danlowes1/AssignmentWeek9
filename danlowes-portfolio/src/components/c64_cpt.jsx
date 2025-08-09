import React from 'react';

const C64Screen = () => {
  const containerStyle = {
    backgroundColor: '#7C7C7C', // Gray border
    padding: '20px',
    height: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const screenStyle = {
    backgroundColor: '#0400A0', // C64 blue
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: '20px',
    padding: '30px',
    width: '600px',
    height: '400px',
    boxSizing: 'border-box',
    lineHeight: '1.5',
    whiteSpace: 'pre',
  };

  const bootText = `
**** COMMODORE 64 BASIC V2 ****

 64K RAM SYSTEM 38911 BASIC BYTES FREE

READY.
`;

  return (
    <div style={containerStyle}>
      <div style={screenStyle}>
        {bootText}
      </div>
    </div>
  );
};

export default C64Screen;
