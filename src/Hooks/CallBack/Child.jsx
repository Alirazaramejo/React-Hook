import React,{memo} from 'react'

function Child({countTwo,setCountTwo}) {
  console.log("Rendered Child")
  return (
    <div>Child
    </div>
  )
}
//first solution is memo Api
export default memo(Child)