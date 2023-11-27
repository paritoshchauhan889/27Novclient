import React,{ useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../api/Api'
import { useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ isUserAuthenticated }) => {




  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
  
      const { data } = await axios.post(`${URL}/login`, {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        // Close the loading toast
        toast.dismiss();
        localStorage.setItem('userId', data?.user._id);
        dispatch(authActions.login());
        isUserAuthenticated(true);
        toast.success('User login Successfully');
        navigate('/dashboard/add-sponser');
      } else {
        // Handle specific error cases
        if (data.message === 'EmailNotRegistered') {
          setError('Email is not registered.');
        } else if (data.message === 'IncorrectPassword') {
          setError('Password is not correct.');
        } else {
          setError('Login failed. Please Check your email id and password.');
        }
        // Close the loading toast and show the error toast
        toast.dismiss();                                  
        toast.error(error);
      }
    } catch (error) {
      console.error(error); 
      setError('Login failed. Please check your credentials.');
      
      toast.dismiss();
      toast.error(error.message);
    }
  };
  return (
    <>
  
  <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login Page</h2>
              <form onSubmit={handleSubmit}>
              
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>

                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter email' name='email' value={inputs.email} onChange={handleChange}/>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter password' name='password' value={inputs.password} onChange={handleChange}/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
               
             
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Login