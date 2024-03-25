import React, { useContext } from 'react'
import { nameContext } from './UseContextHook2'

function Comp3() {
  const name = useContext(nameContext)
  return (

    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default Comp3