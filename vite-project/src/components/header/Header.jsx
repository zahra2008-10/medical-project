import { useState } from "react";
import logo from "../../assets/imgs/logo.svg";
import menu from "./menus";
import "./style-header.css";

function Header() {
  const [item, setItem] = useState(false);
  return (
    <header className="container">
      <div className="img-div">
        <div className="logo-div">
          <img src={logo} alt="Vital+Flow" className="logo" />
        </div>
        <span>Vital+Flow</span>
      </div>

      <nav>
        <ul className={item ? "menu active" : "menu"}>
          {menu.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="btn-head">Book a Call</button>
      <button onClick={() => setItem(!item)} className="burger-btn">
        ☰
      </button>
    </header>
  );
}

export default Header;
