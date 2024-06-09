import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

    const [count, setCount] = useState(0);
    const [disabledInc, setDisabledInc] = useState(false);
    const [disabledReset, setDisabledReset] = useState(true);

  return (
      <div className="App">
        <Counter
        count={count}
        setCount={setCount}
        disabledInc={disabledInc}
        setDisabledInc={setDisabledInc}
        disabledReset={disabledReset}
        setDisabledReset={setDisabledReset}
        />
      </div>
  );
}

export default App;
