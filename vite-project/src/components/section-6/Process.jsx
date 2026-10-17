import doctor from "../../assets/imgs/doctor-4.webp";
import treatment from "../../assets/imgs/treatment.jpg";
import doctor2 from "../../assets/imgs/doctor-5.webp";
import "./Style.process.css";
function Process() {
  return (
    <>
      <section>
        <div className="head-div">
          <div className="zero">
            <span></span>
            <p>How it work</p>
          </div>
          <h2>
            Step-by-step process for <br /> seamless user experience
          </h2>
        </div>

        {/* *********************************************************** */}
        <div className="container-process">
          <div className="box">
            <div>01</div>
            <h5>Share your preferences</h5>
            <p>
              Tell us about your unique needs and <br /> preferences to help us
              create a <br />
              personalized plan for your care.
            </p>

            <img src={doctor} alt="doctor" />
          </div>
          <div className="box">
            <div>02</div>
            <h5>Customized solutions</h5>
            <img src={treatment} alt="Doctor is treat" />
            <p>
              We analyze your requirements and <br /> craft tailored solutions
              designed <br />
              specifically for your goals.
            </p>
          </div>

          <div className="box">
            <div>03</div>
            <h5>Achieve your vision</h5>
            <p>
              Experience seamless results as we <br /> bring your perfect vision
              to life with <br /> precision and care.
            </p>
            <img src={doctor2} alt="doctor" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Process;
