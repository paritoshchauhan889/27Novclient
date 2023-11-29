import React, { useState } from 'react'
import {  Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Faq from './Pages/Faq/Faq';
import Singleblog from './Pages/Blog/SingleBlog/Singleblog';
import BlogList from './Pages/Blog/BlogList/BlogList';
import Speakers from './Pages/Speakers/Speakers'
import SpeakerDetaiil from './Pages/Speakers/Speakerdetail/SpeakerDetaiil';
import Venue from './Pages/Venue/Venue';
import Terms from './Pages/Terms/Terms';
import PublicManagement from './Pages/Terms/Publlication/PublicManagement';
import Organizerdetail from './Pages/Organizers/Organizerdetail/Organizerdetail';
import Organizers from './Pages/Organizers/Organizers';
import Error from './Pages/Error/Error';
import ScrollToTop from "./components/ScrollToTop";
import Login from './components/Account/Login';
import Sponsers from './Pages/Sponsers/Sponsers';
import Register from './components/Account/Register';
import SponserForm from './Pages/Forms/Sponser/AddSponser';
import AddConference from './Pages/Forms/Conference/AddConference';
import EditSponser from './Pages/Forms/Sponser/EditSponser';
import SpeakerForm from './Pages/Forms/Speaker/AddSpeaker';
import EditSpeaker from './Pages/Forms/Speaker/EditSpeaker';
import AddOrganizer from './Pages/Forms/Oraganizer/AddOrganizer';
import EditOrganizer from './Pages/Forms/Oraganizer/EditOrganizer';
import Feedback from './Pages/Testnomialfeedback/Feedback';
import ViewTestnomial from './Pages/Testnomialfeedback/ViewFeedback';
import AddNews from './Pages/Forms/News/AddNews';
import EditNews from './Pages/Forms/News/EditNews';
import SponserDetaiil from './Pages/Sponsers/Sponserdetail/SponserDetaiil';
import AddVenue from './Pages/Forms/venue/AddVenue';
import AddGallery from './Pages/Forms/Gallery/AddGallery';
import EditGallery from './Pages/Forms/Gallery/EditGallery';
import AddFaq from './Pages/Forms/Faq/AddFaq';
import EditFaq from './Pages/Forms/Faq/EditFaq';
import ViewContact from './Pages/Forms/contact/ViewContact';
import ViewSubscribe from './Pages/Forms/Subscribe/ViewSubscribe';
import ViewUsers from './Pages/Forms/All user/ViewUsers';
import AddMedia from './Pages/Forms/Media/AddMedia';
import EditVenue from './Pages/Forms/venue/EditVenue';
import Enroll from './Pages/Enrollment/Enroll';
import ViewEnroll from './Pages/Forms/Enrollment/ViewEnroll';
import EditConference from './Pages/Forms/Conference/EditConference';
import ConferenceTable from './Pages/Conferences/ConferenceTable';
import DetailConferences from './Pages/Conferences/DetailConferences';
import SponserCondition from './Pages/Terms/Static/SponserCondition';
import AuthorServices from './Pages/Services/services-detail/AuthorServices';
import PaymentDetails from './Pages/Terms/Payment/PaymentDetails';
import Registration from './Pages/Registration/Registration';
import Facilitation from './Pages/Services/services-detail/Facilitation';
import Privacy from './Pages/Terms/Privacy/Privacy-Policy';
import ConferencePuclication from './Pages/Terms/ConferencePublciation/ConferencePuclication';
import Exhibit from './Pages/Exhibit/Exhibit';
import Reviewers from './Pages/Reviewers/Reviewers';
import ChangePassword from './Pages/Settings/ChangePassword';
import EditUser from './Pages/Forms/All user/EditUser';




const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);


  return (

    <>
<ScrollToTop>
<Routes>
<Route exact path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='*' element={<Error />} />
<Route path='/all-sponsers' element={<Sponsers />} />
<Route path='/faq' element={<Faq />} />
<Route path='/blogs' element={<BlogList />} />
<Route path='/registration' element={<Registration/>} />
<Route path='/conference-facilitation-services' element={<Facilitation/>} />
<Route path='/services' element={<Services />} />
<Route path='/all-speakers' element={<Speakers />} />
<Route path='/all-organizers' element={<Organizers />} />
<Route path='/all-conferences' element={<ConferenceTable />} />
<Route path='/detail-conference/:id' element={<DetailConferences />} />
<Route path='/Venue' element={<Venue />} />
<Route path='/terms-and-conditions' element={<Terms/>} />
<Route path='/publication-management' element={<PublicManagement />} />
<Route path='/sponser-detail' element={<SponserDetaiil />} />
<Route path='/contact' element={<Contact />} />
<Route path='/author-services' element={<AuthorServices/>} />
<Route path='/detail-sponser/:id' element={<SponserDetaiil />} />
<Route path='/speaker-detail/:id' element={<SpeakerDetaiil />} />
<Route path='/organizer-detail/:id' element={<Organizerdetail />} />
<Route path='/feedback' element={<Feedback />} />
<Route path='/detail-news/:id' element={<Singleblog />} />
<Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
<Route path='/conference-enrollment' element={<Enroll />} />
<Route path='/sponsership' element={<SponserCondition/>} />
<Route path='/payment-details' element={<PaymentDetails/>} />
<Route path='/privacy-policy' element={<Privacy/>} />
<Route path='/conference-publication-service' element={<ConferencePuclication/>} />
<Route path='/exhibit' element={<Exhibit/>} />
<Route path='/our-reviewers' element={<Reviewers/>} />


{/* Here Private Pages Defined Inside The Dashboard */}



<Route path='/dashboard/add-sponser' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-sponser' element={<SponserForm />} />
</Route>
<Route path='/dashboard/edit-sponser/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-sponser/:id' element={<EditSponser />} />
</Route>
<Route path='/dashboard/add-speaker' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-speaker' element={<SpeakerForm />} />
</Route>
<Route path='/dashboard/edit-speaker/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-speaker/:id' element={<EditSpeaker />} />
</Route>
<Route path='/dashboard/add-organizer' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-organizer' element={<AddOrganizer />} />
</Route>
<Route path='/dashboard/edit-organizer/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-organizer/:id' element={<EditOrganizer />} />
</Route>
<Route path='/dashboard/view-testnomial' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/view-testnomial' element={<ViewTestnomial />} />
</Route>
<Route path='/dashboard/add-news' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-news' element={<AddNews />} />
</Route>
<Route path='/dashboard/edit-news/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-news/:id' element={<EditNews />} />
</Route>
<Route path='/dashboard/add-conference' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-conference' element={<AddConference />} />
</Route>
<Route path='/dashboard/edit-conference/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-conference/:id' element={<EditConference />} />
</Route>
<Route path='/dashboard/all-users' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/all-users' element={<ViewUsers />} />
</Route>
<Route path='/dashboard/all-enrollments' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/all-enrollments' element={<ViewEnroll />} />
</Route>
<Route path='/register' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/register' element={<Register />} />
</Route>
<Route path='/dashboard/add-gallery' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-gallery' element={<AddGallery />} />
</Route>
<Route path='/dashboard/edit-gallery/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-gallery/:id' element={<EditGallery />} />
</Route>
<Route path='/dashboard/add-faq' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-faq' element={<AddFaq />} />
</Route>
<Route path='/dashboard/edit-faq/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-faq/:id' element={<EditFaq />} />
</Route>
<Route path='/dashboard/all-contacts' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/all-contacts' element={<ViewContact />} />
</Route>
<Route path='/dashboard/upload' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/upload' element={<AddMedia />} />
</Route>
<Route path='/dashboard/all-subscribers' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/all-subscribers' element={<ViewSubscribe />} />
</Route>
<Route path='/dashboard/add-venue' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/add-venue' element={<AddVenue />} />
</Route>
<Route path='/dashboard/edit-venue/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-venue/:id' element={<EditVenue />} />
</Route>
<Route path='/dashboard/edit-password/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-password/:id' element={<ChangePassword/>} />
</Route>
<Route path='/dashboard/edit-user/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
<Route path='/dashboard/edit-user/:id' element={<EditUser/>} />
</Route>




</Routes>
</ScrollToTop>
    </>
  )
}

export default App