import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // const words = text.split(' ');
    setCharCount(text.length);
  });

  return (
    <div className="container">
      <div className="word">
        <input
          value={text}
          onChange={changeHandler}
          placeholder="Type a word..."
        />
        <button>Generate</button>
      </div>
      <div>
        <p className="count">Outcome: {charCount}</p>
      </div>
    </div>
  );
}

export default App;
