import React, { useState } from 'react'

const Arraymethod = () => {
  const [name ,setName]=useState({firstname:'' ,lastname:''})

  return (
    <div>
    FirstName : 
    <input type="text" 
     value={name.firstname} 
      onChange={(e)=>setName({firstname:e.target.value})}
     /><br/>
     LastName :
    <input type="text" 
      value={name.lastname} 
        onChange={(e)=>setName({lastname:e.target.value})}
      />
    <h2>Your firstname is {name.firstname}</h2>
    <h2>Your lastname is {name.lastname}</h2>
    </div>
  )
}

export default Arraymethod

