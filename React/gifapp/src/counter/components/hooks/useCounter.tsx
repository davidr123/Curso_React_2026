import  { useState } from 'react'

export const useCounter = (initialValue: number = 10) => {

const [counter, setcounter] = useState(initialValue)

const handelAdd = ()=>{
setcounter(counter +1)
}

const handelSubtract = () =>{
    setcounter((counter) => counter -1)
}

const resetCounter = ()=>{
    setcounter(initialValue)
}

  return {
    //Values
        counter,

    //Methods
    handelAdd,
    handelSubtract,
    resetCounter

  }
}


