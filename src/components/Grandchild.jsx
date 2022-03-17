import React, {useContext} from 'react'
import { TestContext } from '../helpers/TestContext'

function Grandchild() {

  const {state} = useContext(TestContext)

  return (
    <div id="grandchild">Grandchild
        <h2>{state}</h2>   
    </div>   
    
  )

}

export default Grandchild