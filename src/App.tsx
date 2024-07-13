import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import CreationCard from "./components/CreationCard";
import Navigation from "./components/Navigation";

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
            <ul className="container header__list">
              <li>
                <a className="links" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Events
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="links" href="#">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </CSSTransition>

        <div className="container header__hero-container">
          <div className="header__hero-container__nav">
            <img src="src\assets\images\logo.svg" alt="Loopstudio logo" />

            <Navigation />

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
                alt="Toggle dropdown icon"
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
            className="mobile"
            src="src\assets\images\mobile\image-interactive.jpg"
            alt="Person immersed in VR"
          />

          <img
            className="desktop col-8"
            src="src\assets\images\desktop\image-interactive.jpg"
            alt="Person immersed in VR"
          />

          <div className="leader-vr__info offset-lg-6 col-lg-6">
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
          <div className="our-creation__heading">
            <h2 className="section__heading">Our creations</h2>
            <button type="button" className="desktop our-creation__see-all-btn">
              See all
            </button>
          </div>

          <div className="mobile">
            <div className="our-creation__list">
              {creation.mobile.map((creation) => (
                <CreationCard
                  title1={creation.title1}
                  title2={creation.title2}
                  src={creation.src[1]}
                  alt={creation.alt}
                />
              ))}
            </div>
          </div>

          <div className="desktop">
            <div className="our-creation__list">
              {creation.mobile.map((creation) => (
                <CreationCard
                  title1={creation.title1}
                  title2={creation.title2}
                  src={creation.src[0]}
                  alt={creation.alt}
                />
              ))}
            </div>
          </div>

          <button type="button" className="mobile our-creation__see-all-btn">
            See all
          </button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__container__section">
            <div>
              <img src="src\assets\images\logo.svg" alt="" />
            </div>

            <Navigation />

            <nav className="mobile">
              <ul className="footer__container__nav">
                <li>
                  <a className="links" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="links" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="links" href="#">
                    Events
                  </a>
                </li>
                <li>
                  <a className="links" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="links" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__container__section">
            <div className="footer__container__socials">
              <a href="#" className="links">
                <img
                  src="src\assets\images\icon-facebook.svg"
                  alt="Redirect to Loopstudio facebook page"
                />
              </a>
              <a href="#" className="links">
                <img
                  src="src\assets\images\icon-twitter.svg"
                  alt="Redirect to Loopstudio twitter page"
                />
              </a>
              <a href="#" className="links">
                <img
                  src="src\assets\images\icon-pinterest.svg"
                  alt="Redirect to Loopstudio pinterest page"
                />
              </a>
              <a href="#" className="links">
                <img
                  src="src\assets\images\icon-instagram.svg"
                  alt="Redirect to Loopstudio instagram page"
                />
              </a>
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
