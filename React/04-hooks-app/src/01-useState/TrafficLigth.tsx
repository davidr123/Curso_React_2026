import { useState } from "react";

const color = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',

}

// type TrafficLigth = 'red' | 'yellow' | 'green'
type TrafficLigth = keyof typeof color

export const TrafficLight = () => {


    const [ligth, setligth] = useState<TrafficLigth>('red')

const onRed = () => {
  setligth('red')
}

const onYellow = () =>{
    setligth('yellow')
}

const onGreen = () =>{
    setligth('green')
}

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div className={`w-32 h-32 ${ligth === 'red' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'yellow' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${ligth === 'green' ? color[ligth]: 'bg-gray-500'} rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button onClick={()=> onRed()}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Rojo
          </button>
          <button onClick={()=> onYellow()}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Amarillo
          </button>
          <button onClick={()=> onGreen()}
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};