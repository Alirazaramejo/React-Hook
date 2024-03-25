import React, { useContext } from 'react'
import { nameContext, nameContext2 } from './UseContextHook2'

function Comp3() {
  const name = useContext(nameContext)
  const name2 = useContext(nameContext2)
  return (

    <div>
      <h2>{name}</h2>
      <h2>{name2}</h2>
    </div>
  )
}

export default Comp3