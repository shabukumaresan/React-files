import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [input, setInput] = useState("");
  console.log("Getting Rendered");

  const inputRef = useRef();

  const display = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  // useEffect (() => {
  //   inputRef.current = input;
  // },[input]);

  return (
    <div>
      <h1>Input</h1>
      <input 
      ref={inputRef} 
      type="text" 
      value={input} 
      onChange={(event) => setInput (event.target.value)} 
      />
      <p>Paragraph :  {input}</p>
      {/* <p>My name is {inputRef.current?.value}</p> */}
      {/* <button onClick={display}>Show Input</button> */}
    </div>
  )
}

export default App;