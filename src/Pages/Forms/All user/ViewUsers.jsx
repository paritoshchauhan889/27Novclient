import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import {URL}  from '../../../api/Api'
import { Link } from 'react-router-dom'

const ViewUsers = () => {
    const [users, setUser] = useState([])

    useEffect(()=>{
myfun();
    },[])

    const myfun = async() =>{
const data = await axios.get(`${URL}/auth/all-users`)
if(data){
    setUser(data.data.users)
}
    }


  return (
    <>
<div className="d-flex">
  <Sidebar/>
 
<div className="container mb-4">
<h4 className='text-center mt-2 mb-2'>All User Data</h4>

<div className=" overflow-auto">
<p>Total Users: {users.length}</p>
<table className="table border table-striped table-hover" >
 <thead className='table-success'>
    <tr>
    <th>#</th>
    <th>Username</th>
    <th>Email</th>
    <th>Join Date</th>
    <th>Update</th>
    </tr>
  </thead>

<tbody>
    {users.map((value,index)=>
    <tr>
        <td>{index+1}</td>
        <td>{value.username}</td>
        <td>{value.email}</td>
        <td>{new Date(value.createdAt).toDateString()}</td>
        <td>
      <Link to={`/dashboard/edit-user/${value._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Update</button></Link>
        </td>
    </tr>
    )
    }
</tbody>
</table>
</div>
</div>
</div>
    </>
  )
}

export default ViewUsers