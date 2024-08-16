import React from "react";

const Form = () => {
  return (

    <div className="container">
      <form>
        <div>
          <p>
            <label>
              <b>Name</b>
            </label>
            <input type="text" className="mx-3" placeholder="Name"></input>
          </p>
        </div>

        <div>
          <p>
            <label>
              <b>Email</b>
            </label>
            <input type="text" className="mx-3" placeholder="Email"></input>
          </p>
        </div>

        <div>
          <p>
            <label>
              <b>Password</b>
            </label>
            <input type="text" className="mx-3" placeholder="Password"></input>
          </p>
        </div>

        <div>
          <p>
            <label>
              <b>Age </b>
            </label>
            <input type="number" className="mx-3"></input>
          </p>
        </div>
        
        <div>
            <button className="btn btn-primary">Submit</button>
        </div>


      </form>
    </div>
  )
}

export default Form;
