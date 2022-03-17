import React from 'react'
import Grandchild from './Grandchild'

function Child() {
  return (
    <div id="child">Child
        <Grandchild/>
    </div>
  )
}

export default Child