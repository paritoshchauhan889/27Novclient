import React from 'react'
import { useEffect, useState } from 'react';
import {getVenues, deleteVenue}  from '../../../api/Api';
import { Link } from 'react-router-dom';


const ViewVenue = () => {


    
  const [venues, setVenue]= useState ([]);

  useEffect(()=>{
    getAllVenues();
  },[]);

  const getAllVenues = async()=>{
    let response =  await getVenues();
    setVenue(response.data);
 
   }


   const deleteVenueDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteVenue(id);
    getAllVenues();


  }

  return (
    <>

 
   <div className="mt-5 container"> 
   <p>Total News/Events: {venues.length}</p>

<table className="table border table-striped table-hover">
  <thead className='table-success'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name Of Place </th>
      <th scope="col">Venue Address</th>
      <th scope="col">Venue Image</th>
      <th scope="col">Venue Website Url</th>
      <th scope="col">Venue email</th>
      <th scope="col">Venue Contact Number</th>
      <th scope="col">Other Contact Person name</th>
      <th scope="col">Other Contact Person email</th>
      <th scope="col">Other Contact Person number</th>
      <th scope="col">About Venue</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  venues.map((venue,index)=>(
    <tr key={venue._id}>
      <td>{index+1}</td>
      <td>{venue.nameofplace}</td>
      <td>{venue.address}</td>
      <td>{venue.image}</td>
      <td>{venue.venueurl}</td>
      <td>{venue.email}</td>
      <td>{venue.contactnumber}</td>
      <td>{venue.contactpersonname}</td>
      <td>{venue.contactpersonemail}</td>
      <td>{venue.contactpersonnumber}</td>
      <td>{venue.description}</td>
      <td>
      <Link to={`/dashboard/edit-venue/${venue._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteVenueDetails(venue._id)}>Delete</button></td>
      
    
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    </>
  )
}

export default ViewVenue
