import React from 'react'
import './Sponsers.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getSponsers}  from '../../api/Api';

const Sponsers = () => {
  const [sponsers, setSponsers]= useState ([]);

  useEffect(()=>{
getAllSponsers();
  },[]);

  const getAllSponsers = async()=>{
    let response =  await getSponsers();
    setSponsers(response.data);
 
   }
  return (
    <>
    <Navbar/>
    <section id="sponsers">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="text-center mb-4">
      <h2>Sponsers</h2>
      <p className='text-center'>Our conferences are graced by visionaries, experts, and trailblazers who have dedicated their lives to pushing the boundaries of human understanding. These speakers bring with them a wealth of experience, insights, and perspectives that enrich the discourse at our events. Through their eloquence and expertise, they inspire audiences and catalyze the formation of new ideas.</p>
    </div>
    <div className="row">
        {sponsers.map((sponser)=>
         <div className="col-lg-4 col-md-6">
         <div className="speaker aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
           <img src={sponser.sponserimage} alt="Speaker 1" className="img-fluid" />
           <div className="details">
             <h3><Link to={`/detail-sponser/${sponser._id}`}>{sponser.sponserfullname}</Link></h3>
             <p>{sponser.sponseremail}</p>
             <p>{sponser.sponsercountry}</p>
           
           </div>
         </div>
       </div>
        )}
    </div>
  </div>
</section>

<Footer/>

    
    </>
  )
}

export default Sponsers