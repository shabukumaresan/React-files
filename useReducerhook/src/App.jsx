import React from 'react'
import { useState, useReducer } from 'react'

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducerFn(state, action){
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1};
    case ACTIONS.DECREMENT:
      return { count: state.count - 1};
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFn,{count:1});
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount((cur) => cur + 1);
    dispatch ({ type: ACTIONS.INCREMENT});
  };

  const decrement = () => {
    // setCount ((cur) => cur - 1);
    dispatch ({ type: ACTIONS.DECREMENT});
  };

  console.log(state);

  return (
    <div 
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <button onClick= {decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App