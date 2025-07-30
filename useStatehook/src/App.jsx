import React,{useState} from 'react';

const App = () => {
  const [num,setNum] = useState(1);

  const handleAdd = () =>{
    setNum((numValue) =>{
      return numValue + 1;
    });
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;