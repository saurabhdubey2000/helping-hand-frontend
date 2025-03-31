// import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="content" id="about">
        <h4>Hope, Strength, and Compassion for All</h4>
        <h2>
          Together, We <br /> Stand, Together, <br /> <span>We Care</span>
        </h2>
        <p>
        At Helping Hand NGO, we unite to bring lasting change, offering support to those in need. Whether it’s access to treatment, poverty relief, or urgent assistance, our kindness, dedication, and unwavering efforts ensure that no one is left behind. Together, we bring hope, care, and strength to every life we touch
        </p>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="number pink">500+</span>
          <p>People We Helped In 2023</p>
        </div>
        <div className="stat">
          <span className="number purple">130+</span>
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