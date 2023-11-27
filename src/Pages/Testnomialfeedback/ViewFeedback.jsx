import React from 'react'
import { useEffect, useState } from 'react';
import {getTestnomials, deleteTestnomial}  from '../../api/Api';
import Sidebar from '../../components/Sidebar/Sidebar';


const ViewTestnomial = () => {


  const [testnomials, setTestnomials]= useState ([]);

  useEffect(()=>{
getAllTestnomials();
  },[]);

  const getAllTestnomials = async()=>{
    let response =  await getTestnomials();
    setTestnomials(response.data);
 
   }
   const deleteTestnomialDetails=async(id)=>{
    await deleteTestnomial(id);
    getAllTestnomials();

  }

   
  return (
    <>
    <div className="d-flex">
        <Sidebar/>
        <div className=" container mt-4">
            <h4 className='text-center mt-2 mb-4'>Testnomial Data</h4>
            <p>Total Feedbacks/Testnomials: {testnomials.length}</p>
<table className="table table-striped table-hover">
  <thead>
    <tr className='table-success'>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Institute</th>
      <th scope="col">Feedback</th>
      <th scope='col'>Approve/not</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  testnomials.map((testnomial,index)=>(
    <tr key={testnomial._id}>
      <td>{index+1}</td>
      <td>{testnomial._id}</td>
      <td>{testnomial.name}</td>
      <td>{testnomial.email}</td>
      <td>{testnomial.institute}</td>
      <td>{testnomial.feedback}</td>
      <td>
    <button className='btn btn-primary' style={{marginRight:5}} onClick={()=>(testnomial._id)}>Approve</button>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteTestnomialDetails(testnomial._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    </div>
    
    
    </>
  )
}

export default ViewTestnomial