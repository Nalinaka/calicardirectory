import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Main from "./Main";
import Cars from "./Cars";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import carLogo from "../assets/Car-logo.png";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  async function getUsers() {
    try {
      const { data } = await axios.get("/api/v1/cars");
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <section id="navbar">
        <section id="landing-page">
          <nav>
            <figure className="nav__link-logo">
              <img
                id="car-logo"
                src={carLogo}
                alt="logo"
                className="car-logo"
              />
            </figure>
            <ul className="nav__link--list">
              <li className="nav__link">
                <Link
                  to="/"
                  className="nav__link--anchor link__hover-effect link__hover-effect--blue"
                >
                  <button>Home</button>
                </Link>
              </li>
              <li className="nav__link">
                <Link
                  to="/cars"
                  className="nav__link--anchor link__hover-effect link__hover-effect--blue"
                >
                  <button>Find your Car</button>
                </Link>
              </li>
              <li className="nav__link">
                <button
                  onClick={toggleModal}
                  className="nav__link--anchor link__hover-effect link__hover-effect--blue"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
          <h1>California's Best Car Directory</h1>
          <h2>Find your new car now!</h2>
        </section>

        {/* Conditional Rendering of Modal */}
        {isModalOpen && (
          <ContactForm toggleModal={toggleModal} isModalOpen={isModalOpen} />
        )}

        {/* Additional Sections */}
        <Cars />
        <Main />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
