import React, { useState } from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button
        className="button"
        onClick={() => setCount(0)}
      >Reset counter</button>
      <button
        className="button"
        //onClick={() => setCount(count + 1)}>
        onClick={() => count >= 10 ? "" : setCount(count + 1)}>
        Increase counter</button>
      <button
        className="button"
        //onClick={() => setCount(count - 1)}>
        onClick={() => count == 0 ? "" : setCount(count - 1)}>
        Decrease counter</button>
    </div>
  )
}

export default App;