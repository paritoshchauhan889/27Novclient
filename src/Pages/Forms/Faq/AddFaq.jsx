import React from 'react'
import { useState } from 'react'
import { addFaq } from '../../../api/Api' 
import {  useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ViewFaq from './ViewFaq'

const AddFaq = () => {

    const dafaultValue={
         faqheading:'',
         faqparagraph:'',
       
    }

const [faq,setFaq]=useState(dafaultValue);
const navigate = useNavigate();

// form value
    const onValueChange=(e)=>{
        setFaq({...faq,[e.target.name]:e.target.value});
    }

    const addFaqDetails = async()=>{
      alert('data submitted successfully');
       await addFaq(faq);

navigate('/dashboard/add-faq');
    }
  return (
    <>

<div className="d-flex">
  <Sidebar/>

<div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Add Faq's</h4>
     <form className="row g-3 needs-validation" noValidate>

  <div className="col-md-12">
    <label htmlFor="validationCustom01" className="form-label">Heading</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="heading" required 
    onChange={(e)=>onValueChange(e)} name='faqheading' 
    />
  
  </div>
  
 
  <div className="form-group purple-border">
  <label for="exampleFormControlTextarea4">Paragraph</label>
  <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" onChange={(e)=>onValueChange(e)} name='faqparagraph' ></textarea>
</div>


  
  

 



  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> addFaqDetails()}>Add Faq</button>
  </div>
</form>
<h4 className='text-center'>All Faq's  Data</h4>
<div className="overflow-scroll">
 
<ViewFaq/>

</div>

    </div>

   </div>
  
   
    </>
  )
}

export default AddFaq