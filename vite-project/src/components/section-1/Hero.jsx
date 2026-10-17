import "./style-hero.css";
import star from "../../assets/imgs/star.svg";
import play from "../../assets/imgs/play.svg";
import girl from "../../assets/imgs/girl-1.webp";
import man from "../../assets/imgs/man-1.webp";
import boy from "../../assets/imgs/man-2.svg";
import doctor1 from "../../assets/imgs/doctor-1.jpg";

function Hero() {
  return (
    <>
      <section>
        <div className="container-1">
          <div className="text-container">
            <div className="stars-div">
              <div className="stars">
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
              </div>
              <span>5.0 (980 Reviews)</span>
            </div>
            {/* *************************************end of stars-div********************** */}

            <div className="text-div">
              <h1>
                Partner in health and <br /> wellness
              </h1>
              <p>
                Providing advanced healthcare solutions with a <br />{" "}
                compassionate touch for every patient.
              </p>
            </div>
            {/* *******************88******************end of text-div*********************8 */}

            <div className="btn-div">
              <button className="btn-1">Book a Call</button>
              <div className="link-play">
                <span>
                  <a
                    href="https://youtu.be/T6_4eTLx4KU?si=Ch_AqU-HJNQVP1ac"
                    target="blank"
                  >
                    <img src={play} alt="play-icon" className="play-icon" />
                  </a>
                </span>
                <p>Watch Video</p>
              </div>
            </div>
            {/* *****************************end of button div *********************************** */}

            <div className="imgs-text-div">
              <div className="imgs-box">
                <img src={girl} alt=" girl" className="girl-1" />
                <img src={man} alt="man" className="man-1" />
                <img src={boy} alt="man" className="man-2" />
              </div>
              <div>
                <p>5000+ Appointments</p>
                <p>Patients booked already</p>
              </div>
            </div>
            {/* ***************************end of imgs-text-div******************************** */}
          </div>
          {/* ******************************************************************************************************************************* */}
          <img src={doctor1} alt="photo of a doctor" className="doctor-1" />
        </div>
        {/* *********************************************************************************************************************************************************************************************** */}

        <div className="div-form">
          <div className="div-head">
            <h4>Virtual Consultation</h4>
            <div className="stars-div">
              <div className="stars">
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
                <img src={star} alt="star-icon" className="star" />
              </div>
              <span>5.0 (980 Reviews)</span>
            </div>
          </div>
          {/* ******************************8end of sdiv-head************************************ */}
          <div>
            <form action="">
              <div className="form">
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" id="name" placeholder="Jane Smith " />
                </div>

                <div>
                  <label htmlFor="doctor">Doctor</label>
                  <br />
                  <input
                    type="text"
                    id="doctor"
                    placeholder="Dr Maria Cleven"
                  />
                </div>

                <div>
                  <label htmlFor="location">Location</label>
                  <br />
                  <input type="text" id="location" placeholder="Amsterdem" />
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="number-text">
            <h2>200k+</h2>
            <p>
              Cured satisfied patients <br />
              around the globe
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
