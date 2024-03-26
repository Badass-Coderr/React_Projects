import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setcounter] = useState(15)

  function updateUP(){
    if(counter < 20)
      setcounter(counter + 1);
    else
      alert("counter cannot be more than zero");
  }
  function updateDown(){
    if(counter > 0)
      setcounter(counter - 1);
    else
      alert("counter cannot be less than zero");
  }

  return (
    <>
      <h1>React Counter {counter}</h1>
      <h2>Using (use state) hooks</h2>
      <button onClick={updateUP}>Increase</button>
      <button onClick={updateDown}>Decrease</button>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>

    </>
  )
}

export default App
