import React, { useState } from 'react'
import { toast } from 'react-toastify';
const Signupscreen = () => {
    const [name,setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const formhandler = (e)=>{
        console.log('Form submit');
        // to prevent page reload on form submit
        e.preventDefault();
        console.log(name,email,password) 
        setName("");
        setEmail("");
        setPassword("");
        toast.success('Form submitted successfully');
    }
  return (
    <div className='container'>
     <h1 className='text-center'>SignUp Screen</h1>
     {/* onsubmit use in form (means when click the submit button then do something*/}
     <form onSubmit={formhandler}>
     <div className='text-center m-auto rounded w-25 bg-dark py-5'>
     <div className='p-2'>
        <label>
            <input type="text" placeholder='Enter your name 'value={name} className='form-control' onChange={(e)=>setName(e.target.value)}/>
        </label>
        </div>

        <div  className='p-2'>
        <label>
            <input type="email" placeholder='Enter your email' value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        </div>

        <div  className='p-2'>
        <label>
            <input type="password" placeholder='Enter your password' value={password} className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        </div>
        <button type='submit' className='btn btn-primary'>
            button
        </button>
     </div>
     </form>
      
    </div>
  )
}

export default Signupscreen
