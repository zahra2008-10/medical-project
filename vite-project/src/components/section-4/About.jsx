import "./style-about.css";
import doctor from "../../assets/imgs/girl-3.jpg";
import bag from "../../assets/imgs/bag.svg";
import star from "../../assets/imgs/star-2.svg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Doctor Image */}
        <img src={doctor} alt="Doctor" className="about-doctor" />

        {/* About Content */}
        <div className="about-content">
          {/* About Label */}
          <div className="about-span">
            <span></span>
            <p>About Us</p>
          </div>

          {/* Heading */}
          <h3 className="about-title">
            Vision for a healthier and <br />
            brighter tomorrow
          </h3>

          {/* Our Mission */}
          <div className="about-info">
            <div className="about-icon-box">
              <img src={bag} alt="Mission" className="about-icon" />
            </div>

            <div className="about-text">
              <p className="about-info-title">Our Mission</p>

              <p className="about-info-description">
                Our mission is to deliver compassionate and <br />
                high-quality healthcare services.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="about-info vision-box">
            <div className="about-icon-box">
              <img src={star} alt="Vision" className="about-icon" />
            </div>

            <div className="about-text">
              <p className="about-info-title">Our Vision</p>

              <p className="about-info-description">
                Leading healthcare provider, recognized for <br />
                innovative practices and care.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="about-button">What We Do</button>
        </div>
      </div>
    </section>
  );
}

export default About;
