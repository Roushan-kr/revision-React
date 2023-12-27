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

  function runMultiplesameFuncn() {
    // whan same thing updated again and agin then react make a batch of it whuch futher go throug 
    // some internal algo check and may got disabled/not reflected 
    // eg increage counter by 4 by adding 1 to each counter 
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)


  }
  return (
    <>
      <h1>this is my spacce</h1>
      <h2>Counter value is: {counter}</h2>

      <button onClick={incrCounter}> {counter} +1</button>
      <br />
      <button onClick={decrCounter}>{counter} -1</button>
      <button onClick={runMultiplesameFuncn}>{counter} -4</button>
    </>
  );
}

export default App;
