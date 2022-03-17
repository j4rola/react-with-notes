import React from 'react' 

function Button({action, text}) {
  return (
    <button onClick={action}>
        {text}
    </button>
  ) 
}

//not that this button component can take any text and any function from its parent, making it 
//reusable for many different situation while we are building.    

export default Button