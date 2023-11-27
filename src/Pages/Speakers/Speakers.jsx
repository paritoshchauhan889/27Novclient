import React from 'react';
import './Speakers.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { getSpeakers } from '../../api/Api';

// Import the default avatar image
import defaultAvatar from '../../api/Assets/img/vector.jpg'; // Replace with the actual path

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    getAllSpeakers();
  }, []);

  const getAllSpeakers = async () => {
    let response = await getSpeakers();
    setSpeakers(response.data);
  };

  return (
    <>
      <Navbar />
      <section id="speakers">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="text-center mb-4">
            <h2>Speakers</h2>
            <p className='text-center'>Our conferences are graced by visionaries, experts, and trailblazers who have dedicated their lives to pushing the boundaries of human understanding. These speakers bring with them a wealth of experience, insights, and perspectives that enrich the discourse at our events. Through their eloquence and expertise, they inspire audiences and catalyze the formation of new ideas.</p>
          </div>
          <div className="row" style={{ justifyContent: 'space-around' }}>
            {speakers.map((speaker) => (
              <div className="col-lg-4 col-md-6" key={speaker._id}>
                <div className="speaker aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
                  
                  {speaker.speakerimage ? (
                    <img src={speaker.speakerimage} alt={`Speaker ${speaker.speakerfullname}`} className="img-fluid"  style={{ width: '400px', height: '300px' }} />
                  ) : (
                    // Display the default avatar image if speakerimage is not available
                    <img src={defaultAvatar} alt={`Avatar for ${speaker.speakerfullname}`} className="img-fluid" style={{ maxWidth: '100%', maxheight: '200px' }}/>
                  )}
                  <div className="details">
                    <h3><Link to={`/speaker-detail/${speaker._id}`}>{speaker.speakerfullname}</Link></h3>
                    <p>{speaker.designation}</p>
                    <p>{speaker.speakercountry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
