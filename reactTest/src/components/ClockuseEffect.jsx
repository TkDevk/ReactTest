import { useState, useEffect} from "react"

const ClockuseEffect = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleString());
    const countClicks = () =>{
        setCount(count+1)
    }
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleString());
        },1000);
    })

    return (
        <>
          <p>{time}</p>
          <button onClick={countClicks}>{count}</button>
        </>
    )
}

export default ClockuseEffect