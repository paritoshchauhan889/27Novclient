import React, {useState,useEffect} from 'react'
import '../Speakers.css'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import {useParams} from 'react-router-dom'
import {getSpeaker } from '../../../api/Api' 
import { Link } from 'react-router-dom'


const SpeakerDetaiil = () => {



  const [speaker,setSpeaker]=useState({});
  const {id} = useParams();

useEffect(()=>{
loadSpeakerDetails();
},[]);

const loadSpeakerDetails= async()=>{
const response = await  getSpeaker(id);
setSpeaker(response.data);
}
  return (
    <>
    <Navbar/>
    <section id="speakers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Speaker Details</h2>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <img src={speaker.speakerimage} alt="Speaker 1" className="img-fluid" />
        <h2>{speaker.speakerfullname} <Link to={speaker.profileurl}><i className="bi bi-linkedin" /></Link></h2>  
          <h5>{speaker.speakeremail}</h5>
      </div>
      {/* <div className="col-md-6 m-auto" style={{lineHeight:'3'}}>
        <div className="text-center">
          <h2>{speaker.speakerfullname} <Link to={speaker.profileurl}><i className="bi bi-linkedin" /></Link></h2>  
          <h5>{speaker.speakeremail}</h5>
          
          
        </div>
      </div> */}
      <span className='mt-4' style={{whiteSpace: 'pre-line',textAlign:'justify'}} >{speaker.bio}</span>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default SpeakerDetaiil