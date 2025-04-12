import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../redux/features/counter/counterSlice'

const Counter = () => {
    const [amount, setAmount] = useState()
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Store Value: {count}</h2>
            <button onClick={() => dispatch(increment())} aria-label='Increment value'>Increment</button>&nbsp;
            <button onClick={() => dispatch(decrement())} aria-label='Decrement value'>Decrement</button>&nbsp;
            <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter the amount' autoComplete='value' />
            <button onClick={() => dispatch(incrementByAmount(amount))} aria-label='Increment amount'>Increment by Amount</button>&nbsp;
            <button onClick={() => { dispatch(reset()); setAmount('') }} aria-label='Reset value'>Reset</button>
        </div>
    )
}

export default Counter