import React from 'react'
import { useState } from 'react'

const [name,setName]=useState('');
const func=(e)=>{
    e.preventDefault();
    setName='';
}

const volunteer = () => {

  return (<> 
  

 <div class="container">
    <div class="div">
        <div class="col-md-3 vform">
            image
        </div>
        <div class="col-md-6 vform">
            <form onSubmit={func}>
            <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" 
                  onChange={(e)=>setName(e.target.value)} 
                  value={name}
                  placeholder="Enter Name" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile</label>
                  <input type="text" class="form-control" id="exampleInputEmail1"
                  placeholder="Mobile" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" 
                  placeholder="Enter email" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" 
                  placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
        </div>

        
    </div>
 </div>
</>
  )
}

export default volunteer