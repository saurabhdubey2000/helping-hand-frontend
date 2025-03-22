import { Carousel } from "react-bootstrap";
import CarouselImg from "../assets/images/cc1.jpg"
import CarouselImg2 from "../assets/images/cc2.jpg"
import CarouselImg3 from "../assets/images/cc3.jpg"
const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Uniting Hearts to Fight Cancer</h3>
          <p>Every battle is unique, but no one fights alone.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Helping Hands, Changing Lives</h3>
          <p>Providing support and care to those in need.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Together, We Make a Difference</h3>
          <p>Join us in the fight against poverty.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
