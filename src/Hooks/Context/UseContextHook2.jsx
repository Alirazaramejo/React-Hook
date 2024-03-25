import React, { createContext } from 'react'
import Comp3 from './Comp3'
export const nameContext = createContext()
function UseContextHook2() {
    //we can avoid props drilling then use context api 
    //context api global context make
    //It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
  return (
    <div>
        <nameContext.Provider value={"ali"}>
            <Comp3/>
        </nameContext.Provider>
    </div>
  )
}

export default UseContextHook2