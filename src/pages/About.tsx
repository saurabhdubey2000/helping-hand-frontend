// import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="content">
        <h4>Hope, Strength, and Compassion for All</h4>
        <h2>
          Together, We <br /> Stand, Together, <br /> <span>We Care</span>
        </h2>
        <p>
          At Cancer Care Mission Trust, we unite to bring lasting change,
          supporting those in need. Through kindness, dedication, and
          unwavering efforts, we offer hope, care, and strength to those
          battling cancer, ensuring no one fights alone.
        </p>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="number pink">500+</span>
          <p>People We Helped In 2023</p>
        </div>
        <div className="stat">
          <span className="number purple">130M+</span>
          <p>Volunteers in 2023</p>
        </div>
        <div className="stat">
          <span className="number purple">120+</span>
          <p>Medical Campaign in 2023</p>
        </div>
        <div className="stat">
          <span className="number pink">35+</span>
          <p>Successful Campaigns</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;