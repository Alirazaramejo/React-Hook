import React,{useCallback, useState} from 'react'
import Child from './Child'
function UseCallBack2() {
  //when click btn child component call why
  //first solution is memo Api
  //but memo api not work whe child component pass a props
  //we use a hook useCallback when props pass
  const [count, setCount] = useState(0)

  const [countTwo,setCountTwo] = useState([])

  const incrementOne = () =>{
    setCount(count + 1)
}
const fn = useCallback(() =>{
  console.log("hello")
},[countTwo])
  return (
    <div>
      <Child countTw0={countTwo} setCountTwo={setCountTwo} fn={fn}/>
      <button onClick={incrementOne}>One</button>
{count}
    </div>
  )
}

export default UseCallBack2