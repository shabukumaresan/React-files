import React, { useEffect, useMemo, useState } from 'react'

const App = () => {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() =>{
    return slowFunction(number);
  },[number]);

  const themeStyles = useMemo(() =>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  },[dark]);

  useEffect(() =>{
    console.log("Theme Changed");
  },[themeStyles]);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
};

export default App;

function slowFunction(num){
  for (let i=0; i < 1000000000; i++) {}
  return num*2;
}