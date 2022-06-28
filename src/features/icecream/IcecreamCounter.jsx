import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { INCREMENT } from './IcecreamConstant';


function IcecreamCounter() {
    const icecreamCount = useSelector(state => {
        console.log(state);
        return state.icecreamCounter.iceCreamCount
    });
    const dispatch = useDispatch();
    
  return (
    <div>
        <h1>Total Ice-Cream : {icecreamCount}</h1>
        <button onClick={()=>dispatch({
            type : INCREMENT, payload : 5
        })}>Increment</button>
    </div>
  )
}

export default IcecreamCounter