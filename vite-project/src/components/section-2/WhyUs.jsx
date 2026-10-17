import "./style-section-2.css";

import doctorImage from "../../assets/imgs/doctor-2.jpg";
import doctor1 from "../../assets/imgs/doctor-3.png";
import doctor2 from "../../assets/imgs/girl-2.png";

function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-container">
        {/* LEFT SIDE */}
        <div className="why-us-content">
          <div className="section-label">
            <span></span>
            <p>Why us</p>
          </div>

          <h2>
            Why choose VitalFlow for
            <br />
            your healthcare?
          </h2>

          {/* ITEM 01 */}
          <div className="why-item">
            <div className="number">01</div>

            <div className="item-content">
              <h3>Experienced Professionals</h3>

              <p>
                Our team of dedicated healthcare providers brings years of
                experience and expertise to deliver care
              </p>
            </div>
          </div>

          {/* ITEM 02 */}
          <div className="why-item">
            <div className="number">02</div>

            <div className="item-content">
              <h3>Advanced Technology</h3>

              <p>
                We utilize cutting-edge medical technology to provide accurate
                diagnoses and effective treatments
              </p>
            </div>
          </div>

          <button className="get-started">Get Started</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="why-us-image">
          <img
            src={doctorImage}
            alt="Healthcare professional"
            className="main-doctor-image"
          />

          {/* FLOATING CARD */}
          <div className="doctors-card">
            <h3>Available Doctors</h3>

            <p className="card-subtitle">Choose Doctors</p>

            {/* DOCTOR 1 */}
            <div className="doctor">
              <img src={doctor1} alt="Jonathan Reed" />

              <div>
                <h4>Jonathan Reed</h4>
                <p>Gastroenterologist</p>
              </div>
            </div>

            {/* DOCTOR 2 */}
            <div className="doctor">
              <img src={doctor2} alt="Olivia Bennett" />

              <div>
                <h4>Olivia Bennett</h4>
                <p>Dermatologist</p>
              </div>
            </div>

            <button className="experts-btn">Meet Our Experts</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
