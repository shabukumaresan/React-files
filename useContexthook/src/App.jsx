import React,{createContext} from 'react';
import Container from  './Container';
import { useState } from 'react';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider 
    value = {{
      theme: theme,
    }}
    >
      <button onClick = {toggleTheme}>Toggle Theme</button>
      <h1>App Component</h1>
      <Container />
    </ThemeContext.Provider>
  );
};

export default App;