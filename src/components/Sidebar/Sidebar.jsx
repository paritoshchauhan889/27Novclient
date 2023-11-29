import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";
import './sidebar.css'

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sticky" style={{ width: 280, height: 'auto' }}>
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
         <h4>Welcome</h4>
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto ">

          <NavLink to="/register" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-person-plus'></i>
            Add User
          </NavLink>
          <NavLink to="/dashboard/upload" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-collection-play-fill"></i>
            Media
          </NavLink>
          <NavLink to="/dashboard/add-speaker" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-person-plus-fill'></i>Add Speaker
          </NavLink>
        
          <NavLink to="/dashboard/add-sponser" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-person-plus-fill"></i>
            Add sponser
          </NavLink>

          <NavLink to="/dashboard/add-organizer" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-person-plus-fill"></i>
            Add Organizer
          </NavLink>
          <NavLink to="/dashboard/add-conference" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-patch-plus'></i>
            Add Conference
          </NavLink>
          <NavLink to="/dashboard/all-users" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-eye" ></i>
            All Users
          </NavLink>


          <NavLink to="/" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-house-fill"></i>
            Home
          </NavLink>


          <NavLink to="/dashboard/all-enrollments" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i class="bi bi-eye-fill"></i>
            Enrollment
          </NavLink>


         

          <NavLink to="/dashboard/view-testnomial" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className="bi bi-bricks"></i>
            Testnomial data
          </NavLink>
          <NavLink to="/dashboard/all-subscribers" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className="bi bi-bricks"></i>
            All Subscribers
          </NavLink>
          <NavLink to="/dashboard/add-gallery" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className="bi bi-cloud-plus-fill"></i>
            Add Gallery
          </NavLink>


          <NavLink to="/dashboard/add-news" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-patch-plus'></i>
            Add News
          </NavLink>



          <NavLink to="/dashboard/add-venue" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-cloud-plus-fill'></i>
            Add Venue
          </NavLink>


        


          <NavLink to="/dashboard/all-contacts" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-person-lines-fill'></i>
            All Contact Us
          </NavLink>


          <NavLink to="/dashboard/add-faq" className="nav-link " aria-current="page" style={{ color: 'white', fontSize: '18px' }}><i className='bi bi-cloud-plus-fill'></i>
            Add Faq
          </NavLink>




        </ul>
        <hr />
        <div className="dropdown">
          <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

            <strong>User</strong>
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <Link className="dropdown-item" to="/dashboard/edit-password/:id">Settings</Link>
            <Link className="dropdown-item" to="#">Profile</Link>
            <hr className="dropdown-divider" />
            <Link className="dropdown-item" to="/login" onClick={handleLogout}>Sign out</Link>
          </ul>
        </div>
      </div>



    </>
  )
}

export default Sidebar
