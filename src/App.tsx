import { CSSTransition } from "react-transition-group";

import { useState } from "react";
import CreationCard from "./components/CreationCard";
import Navigation from "./components/Navigation";
import NavigationDropdown from "./components/NavigationDropdown";

import creation from "./utility/ourCreation.json";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <CSSTransition
          in={isDropdownOpen}
          className="dropdown"
          timeout={450}
          unmountOnExit
        >
          <nav>
            <ul className="container navigation-list-drop">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </CSSTransition>

        <div className="container">
          <div className="hero-container">
            <img src="src\assets\images\logo.svg" alt="" />

            <button type="button" onClick={handleToggleDropdown}>
              <img
                src={
                  !isDropdownOpen
                    ? "src/assets/images/icon-hamburger.svg"
                    : "src/assets/images/icon-close.svg"
                }
                alt=""
              />
            </button>
          </div>

          <div className="hero-header col-12 col-lg-6">
            <h1>Immersive experiences that deliver</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <img
            className="interactive-img"
            src="src\assets\images\mobile\image-interactive.jpg"
            alt=""
          />

          <h2 className="section-header">The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </section>

        <section className="container">
          <h2 className="section-header">Our creations</h2>

          <div className="our-creation">
            {creation.mobile.map((creation) => (
              <CreationCard
                title1={creation.title1}
                title2={creation.title2}
                src={creation.src}
                alt={creation.alt}
              />
            ))}
          </div>
          <button type="button" className="see-all-btn">
            SEE ALL
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-container ">
          <div>
            <img src="src\assets\images\logo.svg" alt="" />
          </div>
          <NavigationDropdown />
          <div className="footer-container__socials">
            <img src="src\assets\images\icon-facebook.svg" alt="" />
            <img src="src\assets\images\icon-twitter.svg" alt="" />
            <img src="src\assets\images\icon-pinterest.svg" alt="" />
            <img src="src\assets\images\icon-instagram.svg" alt="" />
          </div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
