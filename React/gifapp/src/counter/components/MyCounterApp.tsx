
import { useCounter } from './hooks/useCounter'


export const MyCounterApp = () => {

const {counter, handelAdd, handelSubtract, resetCounter} = useCounter(5)
const {counter: counter2} = useCounter(90)

  return (
    <div style={{
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center'
    }}>

        <h1>counter: {counter} - {counter2}</h1>

        <div style={{
            display:'flex',
            gap: '10px'
        }}>
            <button onClick={handelAdd}>+1</button>
            <button onClick={handelSubtract}>-1</button>
            <button onClick={resetCounter} >Reset</button>

        </div>
    </div>
  )
}
