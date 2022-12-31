import React,{useState, useEffect} from 'react'


function Timer() {
    let time = ''
    const [seconds,setSecondes,]= useState(0)
    const [minutes,setMinutes]= useState(0);
    const [hour ,setHour]= useState(0);
    const [startTimer, setStartTimer]= useState(false)
    //const [timerId, setTimerId]= useState(0)
    const onStart = ()=>{
      setStartTimer(false)
    }
    const onStop = ()=>{
      setStartTimer(true)
    }
    const onReset = ()=>{
        setHour(0)
        setMinutes(0)
        setSecondes(0)
    }
    useEffect(()=>{
      let interval = null;
       if (!startTimer){
        interval = setInterval(()=>{
          setSecondes(seconds +1)
          if(seconds > 58){
            setMinutes(minutes + 1)
            setSecondes(0)
            clearInterval(interval)
          }
          if(minutes > 58){
            setHour(hour + 1)
            setMinutes(0)
            clearInterval(interval)
          }
          
        },1000)
       }else{
        clearInterval(interval)
       }
       return ()=>{
        clearInterval(interval)
       }
    })
  /* const handleStop =(e)=>{
    e.preventDefault()
    clearInterval(time)
  } */
    return (
       <div>
        <h3>
            {hour < 10 ? '0' + hour:hour}:
             {minutes < 10 ? '0' + minutes:minutes } :
             {seconds< 10 ? '0' + seconds:seconds }
        </h3>
        <button type="button" className="btn btn-primary w-25" onClick={onStart}>Start</button>
        <button type="button" className="btn btn-danger w-25" onClick={onStop}>Stop</button>
        <button type="button" className="btn btn-danger w-25" onClick={onReset}>Reset</button>
       </div>
    )
}

export default Timer
