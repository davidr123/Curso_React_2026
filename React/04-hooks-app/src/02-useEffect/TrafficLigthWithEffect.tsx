import { useEffect, useState } from "react";

const color = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',

}

// type TrafficLigth = 'red' | 'yellow' | 'green'
type TrafficLigth = keyof typeof color

export const TrafficLigthWithEffect = () => {


    const [ligth, setligth] = useState<TrafficLigth>('red');
const [countdown, setcountdown] = useState(5)



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
    

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

    <h1 className="text-white text-3xl font-thin">Semaforo con useEffect</h1>
    <h2 className="text-white text-xl">Countdown {countdown}</h2>

    <div className="w-64 bg-gray-700 rounded-full h-2">
      <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={{
        width: `${(countdown / 5) *100}%`
      }}></div>

    </div>


        <div className={`w-32 h-32 ${ligth === 'red' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'yellow' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'green' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}

      </div>
    </div>
  );
};