import "./style-feature.css";
import cards from "./card";

function Feature() {
  return (
    <section className="feature">
      {/* Section title */}
      <div className="feature-label">
        <span></span>
        <p>Features</p>
      </div>

      <h2>Innovative solutions to enhance medical service</h2>

      {/* Cards */}
      <div className="feature-cards">
        {cards.map((box) => {
          return (
            <div className="feature-card" key={box.id}>
              <div className="feature-icon">
                <img src={box.Image} alt={box.Heading} />
              </div>

              <h3>{box.Heading}</h3>

              <p>{box.paragraph}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
