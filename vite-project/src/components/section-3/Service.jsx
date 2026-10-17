import "./style-service.css";
import boxs from "./box";

function Service() {
  return (
    <section className="service-section">
      <div className="service-label">
        <span className="circle"></span>
        <p>Service</p>
      </div>

      <h1 className="service-title">
        Personalized solutions for better oral health
      </h1>

      <div className="service-cards">
        {boxs.map((cards) => {
          return (
            <div className="service-card" key={cards.id}>
              <div className="service-image">
                <img src={cards.Image} alt={cards.heading} />
              </div>

              <h3>{cards.heading}</h3>

              <p className="service-description">{cards.paragraph}</p>

              <a href="#" className="service-link">
                {cards.link}
                <span className="arrow">↗</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
