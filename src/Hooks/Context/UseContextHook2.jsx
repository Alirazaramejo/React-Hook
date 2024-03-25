import React, { createContext } from 'react'
import Comp3 from './Comp3'
export const nameContext = createContext()
export const nameContext2 = createContext()
function UseContextHook2() {
    //we can avoid props drilling then use context api 
    //context api global context make
    //It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
  return (
    <div>
        <nameContext.Provider value={"ali"}>
        <nameContext2.Provider value={"raza"}>
            
            <Comp3/>

        </nameContext2.Provider>
        </nameContext.Provider>
    </div>
  )
}

export default UseContextHook2