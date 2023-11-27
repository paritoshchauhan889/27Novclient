import axios from "axios";




  export const URL = 'https://stmconferencesapi.onrender.com';
// export const URL = 'http://localhost:8000';
// sponser section
export const addSponser = async (data) => {

    try {
        return await axios.post(`${URL}/add-sponser`, data)
    } catch (error) {
        console.log('Error while adding sponser Api ', error);    
    }
}                                                                                                                                   


export const getSponsers = async () => {
    try {
        return await axios.get(`${URL}/all-sponsers`);

    } catch (error) {
        console.log('Error while getting sponsser api', error);
    }
}

export const getSponser = async (id) => {
    try {
        return await axios.get(`${URL}/sponser${id}`);
    } catch (error) {
        console.log('Error while getting sponser api', error);
    }
}

export const editSponser = async (sponser, id) => {
    try {
        return await axios.put(`${URL}/sponser${id}`, sponser);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteSponser = async (id) => {

    try {
        return await axios.delete(`${URL}/sponser${id}`);
    } catch (error) {
        console.log('Error while deleting sponser api', error);

    }
}


// speaker section

export const addSpeaker = async (data) => {

    try {
        return await axios.post(`${URL}/add-speaker`, data)
    } catch (error) {
        console.log('Error while adding speaker Api ', error);    
    }
}

export const getSpeakers = async () => {
    try {
        return await axios.get(`${URL}/all-speakers`);

    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const getSpeaker = async (id) => {
    try {
        return await axios.get(`${URL}/speaker${id}`);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}

export const editSpeaker = async (speaker, id) => {
    try {
        return await axios.put(`${URL}/speaker${id}`, speaker);
    } catch (error) {
        console.log('Error while getting  speaker api', error);
    }
}

export const deleteSpeaker = async (id) => {

    try {
        return await axios.delete(`${URL}/speaker${id}`);
    } catch (error) {
        console.log('Error while deleting speaker api', error);

    }
}


// organizer section
export const addOrganizer = async (data) => {

    try {
        return await axios.post(`${URL}/add-organizer`, data)
    } catch (error) {
        console.log('Error while adding organizer Api ', error);    
    }
}


export const getOrganizers = async () => {
    try {
        return await axios.get(`${URL}/all-organizers`);

    } catch (error) {
        console.log('Error while getting organizers api', error);
    }
}

export const getOrganizer = async (id) => {
    try {
        return await axios.get(`${URL}/organizer${id}`);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}

export const editOrganizer = async (organizer, id) => {
    try {
        return await axios.put(`${URL}/organizer${id}`, organizer);
    } catch (error) {
        console.log('Error while getting organizer api', error);
    }
}


export const deleteOrganizer = async (id) => {

    try {
        return await axios.delete(`${URL}/organizer${id}`);
    } catch (error) {
        console.log('Error while deleting organizer api', error);

    }
}



// Testnomial section
export const addTestnomial = async (data) => {

    try {
        return await axios.post(`${URL}/feedback`, data)
    } catch (error) {
        console.log('Error while adding sponser Api ', error);    
    }
}

export const getTestnomials = async () => {
    try {
        return await axios.get(`${URL}/all-testnomials`);

    } catch (error) {
        console.log('Error while getting testnomials api', error);
    }
}


export const editTestnomial = async (testnomial, id) => {
    try {
        return await axios.put(`${URL}/testnomial${id}`, testnomial);
    } catch (error) {
        console.log('Error while getting testnomial api', error);
    }
}
export const deleteTestnomial = async (id) => {

    try {
        return await axios.delete(`${URL}/testnomial${id}`);
    } catch (error) {
        console.log('Error while deleting testnomial api', error);

    }
}






// News section

export const addNews = async (data) => {

    try {
        return await axios.post(`${URL}/add-news`, data)
    } catch (error) {
        console.log('Error while adding news Api ', error);    
    }
}
export const getNewss = async () => {
    try {
        return await axios.get(`${URL}/all-news`);

    } catch (error) {
        console.log('Error while getting slider api', error);
    }
}

export const getNews = async (id) => {
    try {
        return await axios.get(`${URL}/news${id}`);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}

export const editNews = async (news, id) => {
    try {
        return await axios.put(`${URL}/news${id}`, news);
    } catch (error) {
        console.log('Error while getting news api', error);
    }
}


export const deleteNews = async (id) => {

    try {
        return await axios.delete(`${URL}/news${id}`);
    } catch (error) {
        console.log('Error while deleting news api', error);

    }
}





// gallery section



export const addGallery = async (data) => {

    try {
        return await axios.post(`${URL}/add-gallery`, data)
    } catch (error) {
        console.log('Error while adding gallery Api ', error);    
    }
}


export const getGallerys = async () => {
    try {
        return await axios.get(`${URL}/all-gallerys`);

    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}

export const getGallery = async (id) => {
    try {
        return await axios.get(`${URL}/gallery${id}`);
    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}

export const editGallery = async (gallery, id) => {
    try {
        return await axios.put(`${URL}/gallery${id}`, gallery);
    } catch (error) {
        console.log('Error while getting gallery api', error);
    }
}


export const deleteGallery = async (id) => {

    try {
        return await axios.delete(`${URL}/gallery${id}`);
    } catch (error) {
        console.log('Error while deleting gallery api', error);

    }
}




// faq section


export const addFaq = async (data) => {

    try {
        return await axios.post(`${URL}/add-faq`, data)
    } catch (error) {
        console.log('Error while adding faq Api ', error);    
    }
}


export const getFaqs = async () => {
    try {
        return await axios.get(`${URL}/all-faqs`);

    } catch (error) {
        console.log('Error while getting faq api', error);
    }
}

export const getFaq = async (id) => {
    try {
        return await axios.get(`${URL}/faq${id}`);
    } catch (error) {
        console.log('Error while getting faq api', error);
    }
}

export const editFaq = async (sponser, id) => {
    try {
        return await axios.put(`${URL}/faq${id}`, sponser);
    } catch (error) {
        console.log('Error while getting speaker api', error);
    }
}


export const deleteFaq = async (id) => {

    try {
        return await axios.delete(`${URL}/faq${id}`);
    } catch (error) {
        console.log('Error while deleting faq api', error);

    }
}


// contact section


export const addContact = async (data) => {

    try {
        return await axios.post(`${URL}/contact`, data)
    } catch (error) {
        console.log('Error while adding contact Api ', error);    
    }
}


export const getContacts = async () => {
    try {
        return await axios.get(`${URL}/all-contacts`);

    } catch (error) {
        console.log('Error while getting contact api', error);
    }
}



export const deleteContact = async (id) => {

    try {
        return await axios.delete(`${URL}/contact${id}`);
    } catch (error) {
        console.log('Error while deleting contact api', error);

    }
}



// subscribe section 



export const addSubscriber = async (data) => {

    try {
        return await axios.post(`${URL}/`, data)
    } catch (error) {
        console.log('Error while adding subscribe Api ', error);    
    }
}

export const getSubscribers = async () => {
    try {
        return await axios.get(`${URL}/all-subscribers`);

    } catch (error) {
        console.log('Error while getting subscribes api', error);
    }
}

export const addVenue = async (data) => {

    try {
        return await axios.post(`${URL}/add-venue`, data)
    } catch (error) {
        console.log('Error while adding venue Api ', error);    
    }
}


export const getVenues = async () => {
    try {
        return await axios.get(`${URL}/all-venues`);

    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}

export const getVenue = async (id) => {
    try {
        return await axios.get(`${URL}/venue${id}`);
    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}

export const editVenue = async (venue, id) => {
    try {
        return await axios.put(`${URL}/venue${id}`, venue);
    } catch (error) {
        console.log('Error while getting venue api', error);
    }
}


export const deleteVenue = async (id) => {

    try {
        return await axios.delete(`${URL}/venue${id}`);
    } catch (error) {
        console.log('Error while deleting venue api', error);

    }
}

// enroll section

export const addEnroll = async (data) => {

    try {
        return await axios.post(`${URL}/conference-enrollment`, data)
    } catch (error) {
        console.log('Error while adding Enrollment Api ', error);    
    }
}



export const getEnrolls = async () => {
    try {
        return await axios.get(`${URL}/all-enrollments`);

    } catch (error) {
        console.log('Error while getting enrollments api', error);
    }
}


export const getEnroll = async (id) => {
    try {
        return await axios.get(`${URL}/enroll${id}`);
    } catch (error) {
        console.log('Error while getting enroll api', error);
    }
}

export const deleteEnrolls = async (id) => {

    try {
        return await axios.delete(`${URL}/enroll${id}`);
    } catch (error) {
        console.log('Error while deleting enroll api', error);

    }
}



// conference section
export const addConference = async (data) => {

    try {
        return await axios.post(`${URL}/add-conference`, data)
    } catch (error) {
        console.log('Error while adding conference Api ', error);    
    }
}



export const getConferences = async () => {
    try {
        return await axios.get(`${URL}/all-conferences`);

    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}

export const getConference = async (id) => {
    try {
        return await axios.get(`${URL}/conference${id}`);
    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}

export const editConference = async (conference, id) => {
    try {
        return await axios.put(`${URL}/conference${id}`, conference);
    } catch (error) {
        console.log('Error while getting conference api', error);
    }
}


export const deleteConference = async (id) => {

    try {
        return await axios.delete(`${URL}/conference${id}`);
    } catch (error) {
        console.log('Error while deleting conference api', error);

    }
}



