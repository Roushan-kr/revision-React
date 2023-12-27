import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // let counter = 3;
  const [counter, setCounter] = useState(15)

  // useEffect(() => {
  // }, [counter])
  
  function incrCounter() {
    if (counter==20) {
      return
    }
    setCounter(counter+1);
    console.log(counter);
  }
  function decrCounter() {
    if (counter==0) {
      return
    }
    setCounter(counter-1);
    console.log(counter);
  }
  return (
    <>
      <h1>this is my spacce</h1>
      <h2>Counter value is: {counter}</h2>

      <button onClick={incrCounter}> {counter} +1</button>
      <br />
      <button onClick={decrCounter}>{counter} -1</button>
    </>
  );
}

export default App;
