import {useState} from 'react'
const Counter = () => {
  
    const[count, setCount] = useState(0)

    const handleClick =()=>{
        setCount(count+1)
    }

    const handleClickDEC = () =>{
        setCount(count -1)
    }
    






  return (
    <div>
      <h2>React Counter App</h2>

      <button  onClick={handleClick} >INCREMENT</button> COUNT : {count}   <button   onClick={handleClickDEC}>DECREMENT</button>
    </div>
  )
}

export default Counter
