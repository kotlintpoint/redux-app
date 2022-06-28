import React from 'react'
import {useSelector} from 'react-redux';
import ChangeCounter from './ChangeCounter';

function Counter() {

   const count = useSelector(state => state.counter.value)

  return (
    <div>
        <h1>Count : {count}</h1>
        <ChangeCounter/>
    </div>
  )
}

export default Counter