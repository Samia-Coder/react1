import React, { useState } from 'react'

const Login = () => {
  
  const [auth ,setAuth]=useState({

    email:'',
    password:'',

  });

  //destructures
  const {email,password} = auth;


const formhandler =(e)=>{
  e.preventDefault();  // to prevent page reload on form submission.
  console.log(auth);

  
  // clear the form after successful login
  setAuth({
    email:'',
    password:'',
  })


}
  return (
    <div className='container'>
    <h1 className='text-center'>Login</h1>
      <form onSubmit={formhandler}>
        <div className='m-auto text-center bg-dark rounded shadow w-25 p-4'>

        <div className='p-3'>
        <input type="email" className='form-control' required placeholder='Email'  name="email"  value={email} onChange={(e)=>setAuth({...auth,email:e.target.value})}/>
        </div>
        <div className='p-3'>
        <input type="password" className='form-control' required placeholder='Password'  name="password"  value={password} onChange={(e)=>setAuth({...auth,password:e.target.value})}/>
        </div>
        <button type='submit' className='btn btn-info'>Login</button>
        <a href="#" className='text-white p-3'>Forgot Password?</a>
        </div>

      </form>
    </div>
  )
}

export default Login


// import React, { useState } from "react";
// const Login = () => {
// const [auth, setAuth]=useState({
//     email: "",
//     password: "",
// });
// const formhandler =(e)=>{
//         e.preventDefault(); 
//         console.log(auth)
//        // to prevent page reload on form submission.
//     }
//   return (
//     <div className="container">
//       <h1 className="text-center ">Login Screen</h1>
//       <form onSubmit={formhandler}>
//         <div className="text-center m-auto rounded shadow w-25 p-3 bg-dark">

//           <div className="p-3">
//             <input type="email" placeholder="Enter your email" name="email" value={auth.email} onChange={(e)=>setAuth({...auth, email:e.target.value})} className="form-control"/>
//           </div>
//           <div className="p-3">
//             <input type="password" placeholder="Enter your password" name="password" value={auth.password} onChange={(e)=>setAuth({...auth, password:e.target.value})}  className="form-control" />
//           </div>
//           <button type="submit" className="btn btn-info">button</button>

//           <a href="#" className="text-white p-3">Forgot Password?</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

