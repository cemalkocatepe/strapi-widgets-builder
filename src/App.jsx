import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="read-the-docs">Click on the Vite and React logos to learn more {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
