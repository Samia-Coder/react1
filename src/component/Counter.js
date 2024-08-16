//rafce
//react arrow function component export

import { useState } from "react"
const Counter = () => {
//hook --> function component ka 1 part jisy hm br br use kr skty

const[data , setData ] = useState(0);
const addValue =()=>{ 
if (data<1000){
setData(data+1)
}
};
const cutValue =()=>{
  if(data>0){
  setData(data-1)
  }
};
const resetValue =()=>{
  setData(0);
};
  return (
   <div className="body">
     <div className="text-center m-auto bg">
    
    <div className='heading'>
    <h1>Tasbeeh Counter</h1>
    </div>

     <div className="img">

     <div className="pos">
     {data}
     </div>

    <div className="position d-flex">

    <div>
    <button onClick={cutValue} className="btn btn-danger mx-5 ">-</button> 
    </div> 

    <div>
    <button onClick={resetValue} className="btn btn-secondary "><b>0</b></button>
    </div>

     <div>
     <button onClick={addValue} className="btn btn-success mx-5">+</button>
     </div>

    </div>

     </div>

    </div>
   </div>
  )
}

export default Counter
