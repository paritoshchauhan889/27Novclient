import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import {addNews} from '../../../api/Api'
import ViewNews from "./ViewNews";
const AddNews = () => {


    const dafaultValue = {

        title: '',    
        image:'',
        keypoints:'',
        description1:'',
        description2:'',
      }
    
      const [news,setNews]=useState(dafaultValue);
      const navigate = useNavigate();
      
      // form value
          const onValueChange=(e)=>{
              setNews({...news,[e.target.name]:e.target.value});
          }
      
        
          const addNewsDetails = async()=>{
            await addNews(news);

            alert('Data Submitted successfully');

           navigate('/dashboard/add-news');
         }
  return (
    <>

      <div className="d-flex">
        <Sidebar/>

        <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Add News</h4>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
              <label htmlFor="validationImageUrl" className="form-label">Title</label>
              <input type="text" className="form-control" id="validationImageUrl" placeholder="title" required
                onChange={(e) => onValueChange(e)} name='title'
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Image Url</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' />

            </div>
            <div className="col-md-2">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter key  points" required onChange={(e) => onValueChange(e)} name='keypoints' />

            </div>

       
            <label htmlFor="validationCustom03" className="form-label">Description |</label>
            <textarea type='text' rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description1' />
          
       
            <label htmlFor="validationCustom03" className="form-label">Description ||</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description2' />
          
          
            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => addNewsDetails()}>Submit form</button>
            </div>
          </form>
          <h4 className='text-center'>All News  Data</h4>
          <div className="overflow-scroll">

            <ViewNews/>

          </div>

        </div>

      </div>


    </>
  )
}

export default AddNews