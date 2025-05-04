import React from "react";
import profile from "/public//personal.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <section className="home section grid">
      <img src={profile} className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Rohit Bhagat.</span>{" "}
            <p className="text-2xl">Growth-Focused Product Engineer</p>
          </h1>

          <p className="home__description">
            I'm a Product Engineer based in India, focused on building scalable,
            user-centric solutions that bridge technology and business needs. I
            thrive on turning complex problems into elegant products, driving
            growth through thoughtful engineering, design collaboration, and a
            deep understanding of user behavior.
          </p>

          <Link to="/about" className="button">
            More About me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
