import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vaishnavi from "../assets/images/volunteer.jpg";
// import Chetana from "../assets/chetana.jpg";
// import Sakshi from "../assets/sakshi.jpg";
// import Zainab from "../assets/zainab.jpg";
// import Snehal from "../assets/snehal.jpg";
// import "./Volunteer.css";

const volunteers = [
  { name: "Vaishnavi Salunke", image: Vaishnavi },
  { name: "Chetana Shinde", image: Vaishnavi },
  { name: "Sakshi Desai", image: Vaishnavi },
  { name: "Zainab Shaikh", image: Vaishnavi },
  { name: "Snehal Chauhan", image: Vaishnavi },
];

const Volunteer: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="volunteer-section">
      <h4>Dedicated Hearts, Unstoppable Impact</h4>
      <h2>
        Meet Our <span>Volunteers</span>
      </h2>
      <p>
        At Cancer Care Mission Trust, our volunteers are the heart of our mission. 
        With compassion, dedication, and a spirit of service, they provide vital support 
        to cancer patients and their families.
      </p>
      <Slider {...settings}>
        {volunteers.map((volunteer, index) => (
          <div key={index} className="volunteer-card" >
            <img src={volunteer.image} alt={volunteer.name} className="volunteer-image" />
            <h3>{volunteer.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Volunteer;
