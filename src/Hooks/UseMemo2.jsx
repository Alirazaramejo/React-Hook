import React, { useMemo, useState } from 'react'
//why One btn impact or effect Two btn but both or separated but one btn impact two and loading
function UseMemo2() {
    const [count, setCount] = useState(0)
    const [countTwo,setCountTwo] = useState(0)

    const incrementOne = () =>{
        setCount(count + 1)
    }
    const incrementTwo = () =>{
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        console.warn("print One");
        let i = 0;
        while (i < 2000000000) i++;
        return count % 2 === 0;
      }, [count]);
//     const isEven =()=> {
// console.warn("print")
// let i=0;
// while (i<2000000000) i++;
// return count%2===0;

//     }
  return (
    <div>
<button onClick={incrementOne}>
    One
</button>
{count}
<span>{isEven ? "Even": "odd"}</span>
{/* <span>{isEven() ? "Even": "odd"}</span> */}
<button onClick={incrementTwo}> 
Two
</button>
{countTwo}
    </div>
  )
}

export default UseMemo2