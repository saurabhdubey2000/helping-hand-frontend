const AboutRoute = () => {
  return (
    <section className="about-section" id="donation">
      <div className="about-content">
        <div className="content" id="about">
          <h4>Hope, Strength, and Compassion for All</h4>
          <h2>
            Together, We <br /> Stand, Together, <br /> <span>We Care</span>
          </h2>
          <p>
            At Cancer Care Mission Trust, we unite to bring lasting change, offering support to those battling cancer. 
            Whether it's access to treatment, emotional support, or essential resources, our kindness, dedication, 
            and unwavering efforts ensure that no one faces cancer alone. Together, we bring hope, care, and strength 
            to every life we touch.
          </p>
        </div>
        
        <div className="founder-message">
          <div className="message-card">
            <h3>A Vision of Hope and Compassion</h3>
            <h4>A Message from Our Founder</h4>
            <p>
              I founded Cancer Care Mission Trust with a heartfelt mission to support individuals facing cancer, 
              offering hope and strength through their journey. Cancer challenges both spirit and resilience, 
              but with compassionate care, emotional support, and essential resources, we stand by patients and their families.
            </p>
            <p>
              Our progress is a testament to the dedication of our team and the kindness of our supporters. 
              Together, we've brought comfort and hope to many lives.
            </p>
            <p>
              Join us in making a meaningful difference. Thank you for being part of the Cancer Care Mission Trust family.
            </p>
            <div className="signature">
              <p>Mr. Tarun Yadav</p>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mission-section">
        <h3>Compassion in Action</h3>
        <h4>Our Mission to Support and Empower</h4>
        
        <div className="mission-points">
          <div className="mission-item">
            <div className="icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="mission-content">
              <h5>Founded with Compassion</h5>
              <p>Established by social worker Mr. Tarun Yadav, dedicated to supporting cancer patients with empathy and care.</p>
            </div>
          </div>
          
          <div className="mission-item">
            <div className="icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <div className="mission-content">
              <h5>A Mission of Support</h5>
              <p>Committed to ensuring no one faces cancer alone by providing comprehensive assistance.</p>
            </div>
          </div>
          
          <div className="mission-item">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="mission-content">
              <h5>Collaborative Efforts</h5>
              <p>Partnering with governments, corporations, and communities to extend care nationwide.</p>
            </div>
          </div>
          
          <div className="mission-item">
            <div className="icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="mission-content">
              <h5>Years of Impact</h5>
              <p>Making a difference since 2008 through unwavering dedication to cancer care and support.</p>
            </div>
          </div>
        </div>
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

export default AboutRoute;