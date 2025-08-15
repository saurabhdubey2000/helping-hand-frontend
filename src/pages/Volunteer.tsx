import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ismail from "../assets/images/co-ordinator.jpg";
import ActiveM from "../assets/images/active-m.jpg";
import ActiveM2 from "../assets/images/active-m2.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const volunteers = [
  { name: "Ismail Khan (Co-Ordinator)", image: Ismail },
  { name: "Ramesh Rathod (Active Member)", image: ActiveM },
  { name: "Shyam Rathod (Active Member)", image: ActiveM2 },
];

// Custom Arrows
const NextArrow = (props: any) => {
  const { onClick } = props;
  return <div className="arrow next" onClick={onClick}><FaArrowRight /></div>;
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <div className="arrow prev" onClick={onClick}><FaArrowLeft /></div>;
};

const Volunteer: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="volunteer-section" id="volunteer-section">
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
          <div key={index} className="volunteer-card">
            <img src={volunteer.image} alt={volunteer.name} className="volunteer-image" />
            <h3>{volunteer.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Volunteer;
