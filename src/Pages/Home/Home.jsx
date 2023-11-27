import React,{useEffect, useState} from 'react'
import Slider from '../../components/Banner/Slider'
import Cards from '../KnowMore/Cards'
import Company from '../../components/Banner/Company/Company'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.css'
import { Link } from 'react-router-dom'
import {getNewss}  from '../../api/Api';

const Home = () => {


  const [newss, setNewss]= useState ([]);

  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async(id)=>{
    let response =  await getNewss(id);
    setNewss(response.data)
 
   }
   const truncateText =(text, maxWords)=> {
    if (!text) return '';
  
    const words = text.split(' ');
  
    if (words.length <= maxWords) {
      return text;
    } else {
      const truncatedText = words.slice(0, maxWords).join(' ');
      return truncatedText + '...';
    }
  }
  useEffect(() => {
    const marquee = document.getElementById('myMarquee');

    // Function to stop the marquee
    function stopMarquee() {
      marquee.stop();
    }

    // Function to start the marquee
    function startMarquee() {
      marquee.start();
    }

    // Add event listeners to stop and start the marquee
    marquee.addEventListener('mouseover', stopMarquee);
    marquee.addEventListener('mouseout', startMarquee);

    return () => {
      // Clean up event listeners when the component unmounts
      marquee.removeEventListener('mouseover', stopMarquee);
      marquee.removeEventListener('mouseout', startMarquee);
    };
  }, []);


  return (
    <>
    <Navbar/>
  <div className="row g-3">
      <div className="mb-4">
      <Slider />
      </div>
        <div className="col-md-8 div123">
          <Cards/>
        </div>
        <div className="col-md-4">
        <div className="position-sticky" style={{top: '4rem'}}>
    <div>
      <h4 className="fst-italic">Recent News</h4>
      <ul className="list-unstyled">
      <marquee id="myMarquee" direction="up" height="400px">
 {newss.map((news)=>(
     <Link to={`/detail-news/${news._id}`} key={news._id}>
     <Link className="d-flex flex-column  flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top border-bottom" to="#">
<img src={news.image} width={100}  style={{height:'auto',margin:'auto'}} alt="news" />
       <div className="col-lg-8">
       <span className="mb-0" style={{ fontSize: '15px', wordBreak: 'break-all' }}>
  {truncateText(news.title, 8)}
</span>
<Link to={`/detail-news/${news._id}`} style={{color:'Highlight'}}> Read more</Link>
 <div className="0">
 {news.createdAt && !isNaN(new Date(news.createdAt)) && (
  <small className="text-body-secondary">
    {new Date(news.createdAt).toDateString()}
  </small>
)}

 </div>
       </div>
     </Link>
   </Link>
  ))}
 </marquee>
 
       
     
      </ul>
    </div>
   
    
  </div>
        </div>
      
        
     
        <Company/>


      </div>

    <Footer/>
    </>
  )
}

export default Home