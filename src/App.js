import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [state, updateState] = useState(0)    // const [initialState, functionThatUpdatesState] = useState(0) 
  
  const increment = () => {
    updateState(state + 1)
  }

  const decrement = () => {    
    updateState(state - 1)
  }

  //all JS logic is written above the "return" and everthing underneath renders 
  //elements to the page

  /* Props
  props are javascript objects (objects in the general sense) that are defined in 
  one component and passed on to anothers component or components. Below, the props 
  being used are 'action' and 'text'. Text is a string that determines what the button 
  will say on it, and actions determines what function will be called when the button 
  is clicked. The child components will need also need props called 'action' and text,
  but they will just say action={action} and text={text}. 
  This way, the button component will only needs to built once, and the details of the
  button can be defined at the highest level, the App component. */

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
