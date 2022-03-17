import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [state, updateState] = useState(0)
  
  const increment = () => {
    updateState(state + 1)
  }

  const decrement = () => {    
    updateState(state - 1)
  }

  return (
    <div className="App">    
      <h1>{state}</h1>
      <div>
        <Button action={decrement} text="Decrement"/> 
        <Button action={increment} text="Increment"></Button> 
      </div> 
    </div>
  );
}

export default App;
