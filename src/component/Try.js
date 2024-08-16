import React, { useState } from 'react'

const Try = () => {
    const [input , setInput]=useState('');
    const [tasks , setTasks]=useState([]);
    const [editlist, setEditlist]=useState(null);
    
    // add function
    const handleSubmit = () => {
        if (input) {
            if (editlist !== null) {
              const updatelist = tasks.map((a,i) =>i === editlist ? input :a)
              setTasks(updatelist);
              setEditlist(null);
            } else {
            setTasks([...tasks, input]);
            }
            setInput("");
          }
    }


    // del function
    const handleDelete = (x)=>{
        let result = tasks.filter((item)=>{
            return item !== x;
        });
        setTasks(result);
    }


    // Edit function
    const handleEdit = (i)=>{
        setEditlist(i);
        setInput(tasks[i]);
        
    }


  return (
    <div className='box'>
   <div className='inner-box'>
   <div className="container">
    <h3 className='text-center'>Todo App</h3>
        <div className='d-flex my-3'>
        <input type="text" className='form-control input ' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='btn btn-primary' onClick = {handleSubmit}>
            {editlist == null? 'Add': 'Update'}
        </button>
        </div>
    </div>

    {/* create list for storing input values */}
      <div>
        {tasks.map((x,i)=>(

            <div key={i} className='d-flex container my-2'>
            <div className='form-control input'>{i+1} . {x} </div>
            <button className='ms-auto btn btn-danger' onClick={()=>handleDelete(x)}>Delete</button>
            <button className='btn btn-warning mx-2' onClick={()=>handleEdit(i)}>Edit</button>
            </div>        ))}
      </div>

   </div>
    </div>
  )
}

export default Try
