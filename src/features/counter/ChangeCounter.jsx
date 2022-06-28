import React from 'react'
import {useDispatch} from 'react-redux';
import { DECREMENT, INCREMENT, RESET } from './CounterConstant';

function ChangeCounter() {

    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch({type : INCREMENT, payload : 1})
    }
    const handleDecrement = ()=>{
        dispatch({type : DECREMENT, payload : 1})
    }
    const handleReset = ()=>{
        dispatch({type : RESET})
    }

    const handleIncrementByFive=()=>{
        dispatch({type : INCREMENT, payload : 5})
    }

  return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>

        <br/>
        <button onClick={handleIncrementByFive}>Increment by 5</button>
        <button>Increment by 10</button>
    </div>
  )
}

export default ChangeCounter