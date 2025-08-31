import React,{useState} from 'react'

function Statemng() {
    // Traditional Way 
    // const count = useState();
    // const setCount = useState();

    // ReactJS Way 
    const [count,setCount] = useState(0);

    const increment=()=>{
        setCount(count + 1)
    }

    
    const decrement=()=>{
        if(count > 0){
        setCount(count - 1)
   }
    }
  return (
    <div>
      <h2 className='text-white bg-dark'>Counter App</h2>
      <h4>Total Count : {count}</h4>
      <button className='me-3 btn btn-success' onClick={increment}>+</button>
      <button className='btn btn-danger'  onClick={decrement}>-</button>

    </div>
  )
}

export default Statemng
