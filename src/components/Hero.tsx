import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="bgImageset" id="home">
        {/* navbar */}
        <Navbar />
        {/* navbar */}
        <form className="createEventForm nav-link locationFormMobile">
          <div className="position-relative">
            <div className="">
              <input
                placeholder="Current Location"
                className="form-control CurrentLocation pac-target-input"
                name="location"
                defaultValue="Agra, Uttar Pradesh"
                autoComplete="off"
              />
            </div>
            <img
              src="assets/img/address.png"
              className="input-img loactun"
              alt=""
            />
            <img
              src="assets/img/my_location_regular_icon.png"
              className="input-img loactunRight"
              alt=""
            />
          </div>
        </form>
        <div className="d-none">
          <i className="fa fa-question-circle-o" aria-hidden="true" /> Help
        </div>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="assets/img/UserHomeBanner.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item active">
                <img
                  src="assets/img/UserHomeBanner.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              <div className="carousel-item">
                <img
                  src="assets/img/UserHomeBanner2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Hero;
