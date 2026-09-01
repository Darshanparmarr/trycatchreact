import { useState } from 'react'

function Counter() {

    const [increment, setIncrement] = useState(1);
    const [decrement, setDecrement] = useState(100);
    const [multiply, setMultiply] = useState(2);

    return (

        <>
        { increment } <br /><br />
        { decrement } <br /><br />
        { multiply } <br /><br />
        <button onClick={()=>setIncrement(increment+1)} >Increment</button> <br /><br />
        <button onClick={()=>setDecrement(decrement-1)} >Decrement</button> <br /><br />
        <button onClick={()=>setMultiply(multiply*2)} >Multiply by 2 </button> <br /> <br />
        </>
    )
}

export default Counter