import React from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './reviewers.css';

const Reviewers = () => {
  const testimonials = [
    {
      quote: "Subham I'm thoroughly impressed with [Stm Conferences]! Their intuitive platform streamlined our conference logistics, making attendee management a breeze.",
      image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/3f759531-shubham-150x150.jpg',
    },
    {
        quote: "Nigam Kudos to [Stm Conferences] for their outstanding service! Their platform's ease of use and robust features made organizing our conference a delight.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/8e254b48-premn-150x150.jpg',
    },
    {
      quote: "Paritosh The team's support and dedication ensured a flawless event execution. [Stm Conferences] is definitely our choice for future conferences!",
      image: 'https://paritosh.netlify.app/static/media/myimg.e0d125b762b2de3a6028.jpg',
    },
    {
      quote: "Nidhi The seamless registration process, coupled with their proactive support, ensured a stress-free event. Their innovative features and user-friendly interface set the stage for an engaging and memorable conference.",
      image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/11/080e7a5e-img-20231104-wa0010.jpg',
    },
    {
        quote: "Vivek Verma The comprehensive features, like agenda management and speaker engagement tools, ensured a professional and engaging event. I highly recommend [Website Name] for anyone seeking a top-tier conference hosting solution.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/8eeca4d6-img-20230818-wa0000.jpg',
      },
      {
        quote: "Preeti The seamless registration process and customizable options exceeded our expectations. The team's support and dedication ensured a flawless event execution.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/be042411-img-20230818-wa0007.jpg',
      },
      {
        quote: " Amit Kumar RaiTheir innovative features and user-friendly interface set the stage for an engaging and memorable conference. Kudos to [Stm Conferences] for exceeding our expectations!",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/313a774a-amit.jpg',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <div className="container mt-2 mb-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className='test' key={index}>
              <figure   className="snip1157">
                <blockquote className="border">{testimonial.quote}</blockquote>
                <img src={testimonial.image} alt={`sq-sample${index}`}  />
              </figure>
              </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Reviewers;
