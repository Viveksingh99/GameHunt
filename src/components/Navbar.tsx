import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark undefined"
        id="mainNav"
      >
        <div className="container position-relative">
          <button className="navbar-toggler" type="button">
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" href="/">
            <img src="assets/img/logo.png" alt="Game Hunt" title="Game Hunt" />
          </a>
          <div className="nav-item get-in-touch loginBtnMobileBlock">
            <span
              className="nav-link login-b cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#LoginModal"
            >
              <img src="assets/img/userLogin.png" alt="" />{" "}
              <img src="assets/img/userLogin.png" alt="" /> Login | Signup
            </span>
          </div>
          <div className="collapse navbar-collapse homePAgeMenu">
            <form className="createEventForm nav-link locationFormDesk">
              <div className="position-relative">
                <div className="">
                  <input
                    placeholder="Current Location"
                    className="form-control CurrentLocation"
                    name="location"
                    value="Agra, Uttar Pradesh"
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
            <ul className="navbar-nav py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  gamehunt academy
                </a>
              </li>
              <li
                className="nav-item profile-drop cursor-pointer position-relative"
                data-bs-toggle="modal"
                data-bs-target="#PartnerModal"
              >
                <span className="nav-link">partners</span>
              </li>
              <li className="nav-item get-in-touch loginBtnDstBlock">
                <span
                  className="nav-link login-b cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginModal"
                >
                  <img src="assets/img/userLogin.png" alt="" />{" "}
                  <img src="assets/img/userLogin.png" alt="" /> Login | Signup
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
