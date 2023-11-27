import React from 'react'
import { useEffect, useState } from 'react';
import {getOrganizers, deleteOrganizer}  from '../../../api/Api';
import { Link } from 'react-router-dom';

const ViewOrganizer = () => {


  const [organizers, setOrganizers]= useState ([]);

  useEffect(()=>{
getAllOrganizers();
  },[]);

  const getAllOrganizers = async()=>{
    let response =  await getOrganizers();
    setOrganizers(response.data);
 
   }
   const deleteOrganizerDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteOrganizer(id);
    getAllOrganizers();

  }
  
   
  return (
    <>
    <div className="mt-4">
    <p>Total Sponsers: {organizers.length}</p>

<table className="table table-striped table-hover">
  <thead className='table-success'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Designation</th>
      <th scope="col">Department</th>
      <th scope="col">Affilation</th>
      <th scope="col">organizer Image Url</th>
      <th scope="col">organizer Key Points</th>
      <th scope="col">Address</th>
      <th scope="col">Country</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Pincode</th>
      <th scope="col">Bio</th>
      <th scope="col">profile Url</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  organizers.map((organizer,index)=>(
    <tr key={organizer._id}>
      <td>{organizer._id}</td>
      <td>{index+1}</td>
      <td>{organizer.organizerfullname}</td>
      <td>{organizer.organizeremail}</td>
      <td>{organizer.organizerphonenumber}</td>
      <td>{organizer.designation}</td>
      <td>{organizer.department}</td>
      <td>{organizer.affilation}</td>
      <td>{organizer.organizerimage}</td>
      <td>{organizer.organizerkeypoints}</td>
      <td>{organizer.organizeraddress}</td>
      <td>{organizer.organizercountry}</td>
      <td>{organizer.organizerstate}</td>
      <td>{organizer.organizercity}</td>
      <td>{organizer.organizerpincode}</td>
      <td>{organizer.bio}</td>
      <td>{organizer.profileurl}</td>
      <td>
      <Link to={`/dashboard/edit-organizer/${organizer._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteOrganizerDetails(organizer._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewOrganizer