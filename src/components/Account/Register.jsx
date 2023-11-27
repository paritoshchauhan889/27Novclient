import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../api/Api'
import Sidebar from '../Sidebar/Sidebar'

const Register = () => {
  const localhost=URL;
  const navigate =useNavigate();

  // state
  const [inputs, setInputs] =useState({
    username:'',
    email:'',
    password:''
  })

  // handle input change
  const handleChange=(e)=>{
setInputs(prevState =>({
  ...prevState,
  [e.target.name]:e.target.value
}))
  }
  // form handle
  const handleSubmit = async(e)  =>{
    e.preventDefault();
    try {
    const {data} = await axios.post(`${localhost}/register`,{username:inputs.username,email:inputs.email,password:inputs.password})
    if(data.success){
      alert("User login Successfully"); 
      navigate("/login");
    }
   
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
  
<div className="d-flex">
  <Sidebar/>
  <section className="vh-100 bg-image "  style={{margin:'auto'}} >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card" style={{borderRadius: 15}} >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Your Username</label>

                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter username' name='username' value={inputs.username} onChange={handleChange} required/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>

                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter email' name='email' value={inputs.email} onChange={handleChange} required/>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange} required/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
               
             
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

    
    </>
  )
}

export default Register