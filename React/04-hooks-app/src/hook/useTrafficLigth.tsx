import React, { useEffect, useState } from 'react'


const color = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',

}

// type TrafficLigth = 'red' | 'yellow' | 'green'
type TrafficLigth = keyof typeof color

export const useTrafficLigth = (initialValue:number = 5) => {

    const [countdown, setcountdown] = useState(5)

      const [ligth, setligth] = useState<TrafficLigth>('red');

    
    
    
        useEffect(() => {
          if(countdown === 0) return
        
          
    
      const setintervalID =   setInterval(()=>{
          console.log('set interval llamado')
          setcountdown(pre => pre -1)
        }, 1000)
    
            return () =>{
          console.log('Cleanup effect');
          clearInterval(setintervalID)
        }
        
        
        }, [countdown])
    
    
    
        useEffect(() => {
    
          if(countdown >0) return
    
    
            if(countdown === 0) {
          setcountdown(5)
          if(ligth === 'red'){
            setligth('green')
            
            return
          }
    
          if(ligth === 'green'){
            setligth('yellow')
            setcountdown(2)
           
            return
          }
    
          if(ligth === 'yellow'){
            setligth('red')
            return
          }
          return
          }
        }, [countdown])


  return {
    countdown,
    setcountdown,
    ligth,
    setligth, 
    color

  }
}
