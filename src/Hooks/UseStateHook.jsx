import React from 'react'
import { useState } from 'react'
function UseStateHook() {
    // Declaring a state variable is as simple as calling useState with some initial state value, like so: useState(initialStateValue).


    const [age, setAge] = useState(19)
    const handleClick = () =>{
        console.log('Button Clicked')
        setAge(age + 1)
    }
  
    const [ageNew, setAgeNew] = useState(19)
    const [siblingsNum, setSiblingsNum] = 
      useState(10)
  
    const handleAge = () => setAgeNew(age + 1)
    const handleSiblingsNum = () => 
        setSiblingsNum(siblingsNum + 1)
    return (
      <div>
        Today I am {age} Years of Age
        <div>
          <button onClick={handleClick}>Get older! </button>
        </div>


        <p>Today I am {ageNew} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>
          Get older! 
        </button>
        <button onClick={handleSiblingsNum}>
            More siblings! 
        </button>
      </div>
      </div>
    )
}

export default UseStateHook