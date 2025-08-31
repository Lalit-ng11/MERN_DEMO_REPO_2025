import React from 'react'

function Events() {
    // Plain JS 
    // function  myFun(){
    //     alert("Hello world..!")
    // }
    // Event in ReactJs 
    function handleClick(){
        alert("User Clicked on Button..!")
    }
  return (
    <div>
        {/* Regular/Plain HTML  */}
      {/* <button onClick=myFun()>Click</button> */}

      {/* Event in ReactJs  */}
      <button className='btn btn-success' onClick={handleClick}>Click</button>
    </div>
  )
}

export default Events
