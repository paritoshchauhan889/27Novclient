import React from 'react'
import './testinomial.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {getTestnomials}  from '../../api/Api';


const Testinomial = () => {
  const [testnomials, setTestnomials]= useState ([]);
  useEffect(()=>{
    getAllTestnomials();
      },[]);
  const getAllTestnomials = async()=>{
    let response =  await getTestnomials();
    setTestnomials(response.data);
 
   }


  return (
    <>
    
 <div className="testimonial-area">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="section-header text-center">
          {/* <h4>Testimonials</h4> */}
          <h2  style={{color: "#1d5818"}}>What Clients Says</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat at animi unde, et, obcaecati eius.</p>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="carousel slide" data-bs-ride="true" id="carouselExampleIndicators">
          <div className="carousel-indicators">
            <button aria-label="Slide 1" className="active" data-bs-slide-to={1} data-bs-target="#carouselExampleIndicators" type="button" /> <button aria-label="Slide 2" data-bs-slide-to={1} data-bs-target="#carouselExampleIndicators" type="button" /> <button aria-label="Slide 3" data-bs-slide-to={2} data-bs-target="#carouselExampleIndicators" type="button" />
          </div>
          <div className="carousel-inner">
            {
              testnomials.map(testinomial=>(
              <div className="carousel-item active ">
              <div className="icon-area">
                <i className="fa fa-comments" />
              </div>
            <div className="content text-center">
             <p>{testinomial.institute}</p>
                <div className="person"><img alt='logo' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" /></div>
                <h5>{testinomial.name}</h5>
                <h6>{testinomial.institute}</h6>
                <Link to='/feedback'><button className='btn btn-success'>Feedback</button></Link>

              </div>
            </div>
            ))
           }
          
            
           
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>


    
    
    
    

    </>
  )
}

export default Testinomial