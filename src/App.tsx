import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import CreationCard from "./components/CreationCard";

import creation from "./utility/ourCreation.json";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="header">
        <CSSTransition
          in={isDropdownOpen}
          className="header__dropdown"
          timeout={450}
          unmountOnExit
        >
          <nav>
            <ul className="container header__dropdown__nav">
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

        <div className="container header__hero-container">
          <div className="header__hero-container__top">
            <img src="src\assets\images\logo.svg" alt="Loopstudio logo" />

            <nav className="desktop">
              <ul className="header__hero-container__top__nav">
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

            <button
              className="mobile"
              type="button"
              onClick={handleToggleDropdown}
            >
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

          <div className="header__hero-container__hero-header col-12 col-lg-6">
            <h1>Immersive experiences that deliver</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="section leader-vr container">
          <img
            src="src\assets\images\mobile\image-interactive.jpg"
            alt="Person immersed in VR"
          />

          <div>
            <h2 className="section__heading">The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section className="section our-creation container">
          <h2 className="section__heading">Our creations</h2>

          <div className="our-creation__list">
            {creation.mobile.map((creation) => (
              <CreationCard
                title1={creation.title1}
                title2={creation.title2}
                src={creation.src}
                alt={creation.alt}
              />
            ))}
          </div>

          <button type="button" className="our-creation__see-all-btn">
            See all
          </button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <div>
            <img src="src\assets\images\logo.svg" alt="" />
          </div>

          <nav>
            <ul className="footer__container__nav">
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

          <div className="footer__container__socials">
            <a href="#">
              <img
                src="src\assets\images\icon-facebook.svg"
                alt="Redirect to Loopstudio facebook page"
              />
            </a>
            <a href="#">
              <img
                src="src\assets\images\icon-twitter.svg"
                alt="Redirect to Loopstudio twitter page"
              />
            </a>
            <a href="#">
              <img
                src="src\assets\images\icon-pinterest.svg"
                alt="Redirect to Loopstudio pinterest page"
              />
            </a>
            <a href="#">
              <img
                src="src\assets\images\icon-instagram.svg"
                alt="Redirect to Loopstudio instagram page"
              />
            </a>
          </div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
