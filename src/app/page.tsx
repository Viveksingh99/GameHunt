import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Game Hunt</title>
        <meta property="og:title" content="Game Hunt" />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="assets/img/logo.png" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="" />
        <link rel="alternate" hrefLang="en-US" href="" />
        <meta name="robots" content="index, follow" />
        <meta property="fb:page_id" content="" />
        <meta name="revisit-after" content="" />
        <meta name="copyright" content="" />
        <meta name="distribution" content="" />
        <meta name="language" content="english" />
        <meta property="og:type" content="Website" />
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.png" />
        <link href="assets/css/plugin.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        <div id="root">
          <div className="Toastify" />
          <div className="bgImageset" id="home">
            <nav
              className="navbar navbar-expand-lg navbar-dark undefined"
              id="mainNav"
            >
              <div className="container position-relative">
                <button className="navbar-toggler" type="button">
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="/">
                  <img
                    src="assets/img/logo.png"
                    alt="Game Hunt"
                    title="Game Hunt"
                  />
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
                          defaultValue="Agra, Uttar Pradesh"
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
                        <img src="assets/img/userLogin.png" alt="" /> Login |
                        Signup
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
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
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </header>
          </div>
          <section className="mt-4 pt-4" id="ourprograms">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                  <h3 className="sec-title">Training by Professionals</h3>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                  <ul
                    className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/cricket_ball_icon.png"
                          alt=""
                          className="sportTabImg"
                        />
                        cricket
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/Footall.png"
                          alt=""
                          className="sportTabImg"
                        />
                        football
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/Basketball.png"
                          alt=""
                          className="sportTabImg"
                        />
                        basketball
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/table_tennis.png"
                          alt=""
                          className="sportTabImg"
                        />
                        table Tennis
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/badminton.png"
                          alt=""
                          className="sportTabImg"
                        />
                        badminton
                      </button>
                    </li>
                  </ul>
                  <div className="d-none">
                    <div className="position-relative filterDrop">
                      <img src="assets/img/filter.png" alt="" />
                      <span className="filterText">Filter</span>
                      <div className="filterDropSelct">
                        <span className="me-2 fw-bold">Filter By:</span>
                        <select>
                          <option value="">Select</option>
                          <option value={1}>My favourite</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div id="dynamicDots" className="position-relative">
                      <div className="slider programIMages sportSlider">
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line text-dark w-100 fw-bold"
                                  title="Gamehunt Football Academy"
                                >
                                  Gamehunt Football Academy
                                </h5>
                                <p className="text-dark ellips1Line w-100 mb-3">
                                  football
                                </p>
                              </a>
                              <div className="eventCreater">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg"
                                  className="rounded-circle eventCreaterIcon"
                                  alt=""
                                />
                                <span>
                                  <p className="mb-0 fw-bold ellips1Line w-100 text-dark">
                                    Prasad Bhosale
                                  </p>
                                </span>
                              </div>
                              <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                <span className="ellips1Line w-100 text-dark">
                                  Kandivali, Kandivali West, Mumbai,
                                  Maharashtra, India
                                </span>
                                <a
                                  href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />{" "}
                                  1032.13Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="viewAll theme-color" href="#">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 pt-4" id="ourprograms">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                  <h3 className="sec-title">Venues near me</h3>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                  <ul
                    className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/cricket_ball_icon.png"
                          alt=""
                          className="sportTabImg"
                        />
                        cricket
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/Footall.png"
                          alt=""
                          className="sportTabImg"
                        />
                        football
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/Basketball.png"
                          alt=""
                          className="sportTabImg"
                        />
                        basketball
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/table_tennis.png"
                          alt=""
                          className="sportTabImg"
                        />
                        table Tennis
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                      >
                        <img
                          src="assets/img/badminton.png"
                          alt=""
                          className="sportTabImg"
                        />
                        badminton
                      </button>
                    </li>
                  </ul>
                  <div className="d-none">
                    <div className="position-relative filterDrop">
                      <img src="assets/img/filter.png" alt="" />
                      <span className="filterText">Filter</span>
                      <div className="filterDropSelct">
                        <span className="me-2 fw-bold">Filter By:</span>
                        <select>
                          <option value="">Select</option>
                          <option value={1}>My favourite</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div id="dynamicDots" className="position-relative">
                      <div className="slider programIMages sportSlider">
                        <div>
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line w-100 fw-bold text-dark"
                                  title="Kaushik football Academy"
                                >
                                  Kaushik football Academy
                                </h5>
                                <p className="mb-0 text-dark">football</p>
                              </a>
                              <p className="mb-0 ellips1Line w-100 text-dark">
                                Malad, Malad West, Mumbai, Maharashtra, India
                              </p>
                              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                <a
                                  href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />
                                  1033.94Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line w-100 fw-bold text-dark"
                                  title="Kaushik football Academy"
                                >
                                  Kaushik football Academy
                                </h5>
                                <p className="mb-0 text-dark">football</p>
                              </a>
                              <p className="mb-0 ellips1Line w-100 text-dark">
                                Malad, Malad West, Mumbai, Maharashtra, India
                              </p>
                              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                <a
                                  href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />
                                  1033.94Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line w-100 fw-bold text-dark"
                                  title="Kaushik football Academy"
                                >
                                  Kaushik football Academy
                                </h5>
                                <p className="mb-0 text-dark">football</p>
                              </a>
                              <p className="mb-0 ellips1Line w-100 text-dark">
                                Malad, Malad West, Mumbai, Maharashtra, India
                              </p>
                              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                <a
                                  href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />
                                  1033.94Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line w-100 fw-bold text-dark"
                                  title="Kaushik football Academy"
                                >
                                  Kaushik football Academy
                                </h5>
                                <p className="mb-0 text-dark">football</p>
                              </a>
                              <p className="mb-0 ellips1Line w-100 text-dark">
                                Malad, Malad West, Mumbai, Maharashtra, India
                              </p>
                              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                <a
                                  href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />
                                  1033.94Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                            <div className="position-relative">
                              <a className="text-dark" href="#">
                                <img
                                  src="https://gamehunt-data.s3.amazonaws.com/F.jpeg"
                                  className="img-fluid tabImage"
                                  alt=""
                                />
                              </a>
                              <div className="venueBoxIcons">
                                <span className="votesRatingBg">
                                  0{" "}
                                  <img
                                    src="assets/img/star.png"
                                    alt=""
                                    className="start"
                                  />
                                </span>{" "}
                                0 votes
                              </div>
                              <img
                                src="assets/img/Favoriteunselected.png"
                                alt=""
                                className="d-none"
                              />
                            </div>
                            <div className="text-start mt-3">
                              <a className="text-dark" href="#">
                                <h5
                                  className="ellips1Line w-100 fw-bold text-dark"
                                  title="Kaushik football Academy"
                                >
                                  Kaushik football Academy
                                </h5>
                                <p className="mb-0 text-dark">football</p>
                              </a>
                              <p className="mb-0 ellips1Line w-100 text-dark">
                                Malad, Malad West, Mumbai, Maharashtra, India
                              </p>
                              <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                <a
                                  href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India"
                                  target="_blank"
                                  className="clubKMS box-shadow"
                                >
                                  <img
                                    src="assets/img/map_pins_icon.png"
                                    alt=""
                                    className="map_pins_icon"
                                  />
                                  1033.94Km
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="viewAll theme-color" href="/venues-listing">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-4" id="Offerevents">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                  <h3 className="sec-title">Offers and Sport Events</h3>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                  <ul
                    className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active text-capitalize d-grid"
                        type="button"
                        id="pills-offer-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-offer"
                      >
                        offers
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link text-capitalize d-grid"
                        type="button"
                        id="pills-events-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-events"
                      >
                        events
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-offer"
                      role="tabpanel"
                      aria-labelledby="pills-offer-tab"
                    >
                      <div id="dynamicDots" className="position-relative">
                        <div className="slider EventNewsSlider sportSlider">
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage1.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage2.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage3.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage1.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage2.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/offerImage3.png"
                                    className="img-fluid eventTabImg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-events"
                      role="tabpanel"
                      aria-labelledby="pills-events-tab"
                    >
                      <div id="dynamicDots" className="position-relative">
                        <div className="slider EventNewsSlider sportSlider">
                          <div className="">
                            <div className="AlreadyEvent">
                              <div className="AlreadyEventBox">
                                <img
                                  src="assets/img/dummyImage.png"
                                  alt=""
                                  className="eventImg"
                                />
                                <a href="#" className="text-dark">
                                  <h6 className="mb-0 nameAddressEllip">
                                    void acadamy
                                  </h6>
                                  <p className="mb-0 nameAddressEllip">
                                    Kandivali
                                  </p>
                                </a>
                                <span className="position-relative Sidetag">
                                  <img src="assets/img/Sidetag.png" alt="" />
                                  <span className="SidetagText">
                                    Booked User: 11/20
                                  </span>
                                </span>
                              </div>
                              <div className="eventCreateDetail">
                                <div className="row px-1 align-items-center">
                                  <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                    <img
                                      src="assets/img/employe.png"
                                      className="rounded-circle eventCreaterIcon"
                                      alt=""
                                    />
                                    <span>
                                      <p className="mb-0">Created by</p>
                                      <p className="mb-0 fw-bold">lav kush</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                    <span>
                                      <p className="mb-0">Available Sports</p>
                                      <p className="mb-0 fw-bold">Cricket</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>
                                      <p className="mb-0">Date &amp; Time</p>
                                      <p className="mb-0 fw-bold">
                                        Dec 20, 2022
                                      </p>
                                      <p className="mb-0 fw-bold">
                                        10:00am - 11:00pm
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="paymentJoin">
                                <span>
                                  <p className="mb-0">Payment required</p>
                                  <p className="mb-0 theme-color fw-bold">
                                    <i className="fa fa-inr" /> 35 /-
                                  </p>
                                </span>
                                <button className="joinUsBtn">Join Us</button>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="AlreadyEvent">
                              <div className="AlreadyEventBox">
                                <img
                                  src="assets/img/dummyImage.png"
                                  alt=""
                                  className="eventImg"
                                />
                                <a href="#" className="text-dark">
                                  <h6 className="mb-0 nameAddressEllip">
                                    void acadamy
                                  </h6>
                                  <p className="mb-0 nameAddressEllip">
                                    Kandivali
                                  </p>
                                </a>
                                <span className="position-relative Sidetag">
                                  <img src="assets/img/Sidetag.png" alt="" />
                                  <span className="SidetagText">
                                    Booked User: 11/20
                                  </span>
                                </span>
                              </div>
                              <div className="eventCreateDetail">
                                <div className="row px-1 align-items-center">
                                  <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                    <img
                                      src="assets/img/employe.png"
                                      className="rounded-circle eventCreaterIcon"
                                      alt=""
                                    />
                                    <span>
                                      <p className="mb-0">Created by</p>
                                      <p className="mb-0 fw-bold">lav kush</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                    <span>
                                      <p className="mb-0">Available Sports</p>
                                      <p className="mb-0 fw-bold">Cricket</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>
                                      <p className="mb-0">Date &amp; Time</p>
                                      <p className="mb-0 fw-bold">
                                        Dec 20, 2022
                                      </p>
                                      <p className="mb-0 fw-bold">
                                        10:00am - 11:00pm
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="paymentJoin">
                                <span>
                                  <p className="mb-0">Payment required</p>
                                  <p className="mb-0 theme-color fw-bold">
                                    <i className="fa fa-inr" /> 35 /-
                                  </p>
                                </span>
                                <button className="joinUsBtn">Join Us</button>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="AlreadyEvent">
                              <div className="AlreadyEventBox">
                                <img
                                  src="assets/img/dummyImage.png"
                                  alt=""
                                  className="eventImg"
                                />
                                <a href="#" className="text-dark">
                                  <h6 className="mb-0 nameAddressEllip">
                                    void acadamy
                                  </h6>
                                  <p className="mb-0 nameAddressEllip">
                                    Kandivali
                                  </p>
                                </a>
                                <span className="position-relative Sidetag">
                                  <img src="assets/img/Sidetag.png" alt="" />
                                  <span className="SidetagText">
                                    Booked User: 11/20
                                  </span>
                                </span>
                              </div>
                              <div className="eventCreateDetail">
                                <div className="row px-1 align-items-center">
                                  <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                    <img
                                      src="assets/img/employe.png"
                                      className="rounded-circle eventCreaterIcon"
                                      alt=""
                                    />
                                    <span>
                                      <p className="mb-0">Created by</p>
                                      <p className="mb-0 fw-bold">lav kush</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                    <span>
                                      <p className="mb-0">Available Sports</p>
                                      <p className="mb-0 fw-bold">Cricket</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>
                                      <p className="mb-0">Date &amp; Time</p>
                                      <p className="mb-0 fw-bold">
                                        Dec 20, 2022
                                      </p>
                                      <p className="mb-0 fw-bold">
                                        10:00am - 11:00pm
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="paymentJoin">
                                <span>
                                  <p className="mb-0">Payment required</p>
                                  <p className="mb-0 theme-color fw-bold">
                                    <i className="fa fa-inr" /> 35 /-
                                  </p>
                                </span>
                                <button className="joinUsBtn">Join Us</button>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <div className="AlreadyEvent">
                              <div className="AlreadyEventBox">
                                <img
                                  src="assets/img/dummyImage.png"
                                  alt=""
                                  className="eventImg"
                                />
                                <a href="#" className="text-dark">
                                  <h6 className="mb-0 nameAddressEllip">
                                    void acadamy
                                  </h6>
                                  <p className="mb-0 nameAddressEllip">
                                    Kandivali
                                  </p>
                                </a>
                                <span className="position-relative Sidetag">
                                  <img src="assets/img/Sidetag.png" alt="" />
                                  <span className="SidetagText">
                                    Booked User: 11/20
                                  </span>
                                </span>
                              </div>
                              <div className="eventCreateDetail">
                                <div className="row px-1 align-items-center">
                                  <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                    <img
                                      src="assets/img/employe.png"
                                      className="rounded-circle eventCreaterIcon"
                                      alt=""
                                    />
                                    <span>
                                      <p className="mb-0">Created by</p>
                                      <p className="mb-0 fw-bold">lav kush</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                    <span>
                                      <p className="mb-0">Available Sports</p>
                                      <p className="mb-0 fw-bold">Cricket</p>
                                    </span>
                                  </div>
                                  <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>
                                      <p className="mb-0">Date &amp; Time</p>
                                      <p className="mb-0 fw-bold">
                                        Dec 20, 2022
                                      </p>
                                      <p className="mb-0 fw-bold">
                                        10:00am - 11:00pm
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="paymentJoin">
                                <span>
                                  <p className="mb-0">Payment required</p>
                                  <p className="mb-0 theme-color fw-bold">
                                    <i className="fa fa-inr" /> 35 /-
                                  </p>
                                </span>
                                <button className="joinUsBtn">Join Us</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="WhyChooseUsBg">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 text-center">
                  <h3 className="sec-title text-white">Why Choose Us</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4 DesktopViewUs">
                  <div className="slick-slider ProgramSlider slick-initialized">
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: 1296,
                          opacity: 1,
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      >
                        <div
                          data-index={0}
                          className="slick-slide slick-active slick-current"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 324 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/whychoose_icon1.png"
                                    className="img-fluid ChooseUsIcon"
                                    alt=""
                                  />
                                  <div className="text-white mt-4">
                                    <h5 className="text-capitalize">
                                      Sports venues at fingertips
                                    </h5>
                                    <small className="ps-3">
                                      Heard anything better than a selection of
                                      sports venues that work with your
                                      schedule?
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={1}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 324 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/whychoose_icon2.png"
                                    className="img-fluid ChooseUsIcon"
                                    alt=""
                                  />
                                  <div className="text-white mt-4">
                                    <h5 className="text-capitalize">
                                      Assertive Coaching camps for persistence.
                                    </h5>
                                    <small className="ps-3">
                                      It may be difficult to locate quality
                                      coaching academies in your area. As a
                                      result,
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={2}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 324 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/whychoose_icon3.png"
                                    className="img-fluid ChooseUsIcon"
                                    alt=""
                                  />
                                  <div className="text-white mt-4">
                                    <h5 className="text-capitalize">
                                      The GAMEHUNT ACADEMY
                                    </h5>
                                    <small className="ps-3">
                                      The Gamehunt Academy is a one-stop shop
                                      for schools and students seeking sports
                                      and life skills.
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={3}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 324 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                  <img
                                    src="assets/img/whychoose_icon4.png"
                                    className="img-fluid ChooseUsIcon"
                                    alt=""
                                  />
                                  <div className="text-white mt-4">
                                    <h5 className="text-capitalize">
                                      Events &amp; Tournaments
                                    </h5>
                                    <small className="ps-3">
                                      The Gamehunt is d edicated to providing
                                      numerous opportunities for our young
                                      athletes to develop and showcase their
                                      skills at a competitive level.
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mobirlViewUs">
                  <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="assets/img/whychoose_icon1.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Sports venues at fingertips
                            </h5>
                            <small className="ps-3">
                              Heard anything better than a selection of sports
                              venues that work with your schedule?
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="assets/img/whychoose_icon2.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Assertive Coaching camps for persistence.
                            </h5>
                            <small className="ps-3">
                              It may be difficult to locate quality coaching
                              academies in your area. As a result,
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="assets/img/whychoose_icon3.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              The GAMEHUNT ACADEMY
                            </h5>
                            <small className="ps-3">
                              The Gamehunt Academy is a one-stop shop for
                              schools and students seeking sports and life
                              skills.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                      <div className="text-center cursor-pointer whyChooseBox">
                        <div className="eventGridFlex">
                          <img
                            src="assets/img/whychoose_icon4.png"
                            className="img-fluid ChooseUsIcon"
                            alt=""
                          />
                          <div className="text-white mt-4">
                            <h5 className="text-capitalize">
                              Events &amp; Tournaments
                            </h5>
                            <small className="ps-3">
                              The Gamehunt is dedicated to providing numerous
                              opportunities for our young athletes to develop
                              and showcase their skills at a competitive level.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 pt-4">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center">
                  <h3 className="sec-title">Online Session</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          width: 1296,
                          opacity: 1,
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      >
                        <div
                          data-index={0}
                          className="slick-slide slick-active slick-current"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 432 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                href="https://www.youtube.com/embed/IkNfPb3sfLQ"
                                target="_blank"
                                className="text-dark"
                              >
                                <div className="">
                                  <div className="eventGridFlex position-relative">
                                    <iframe
                                      src="https://www.youtube.com/embed/IkNfPb3sfLQ"
                                      title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                      frameBorder={0}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      // allowFullScreen=""
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={1}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 432 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                href="https://www.youtube.com/embed/qXcdq826f5Q"
                                target="_blank"
                                className="text-dark"
                              >
                                <div className="">
                                  <div className="eventGridFlex position-relative">
                                    <iframe
                                      src="https://www.youtube.com/embed/qXcdq826f5Q"
                                      title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                      frameBorder={0}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      // allowFullScreen=""
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-index={2}
                          className="slick-slide slick-active"
                          tabIndex={-1}
                          aria-hidden="false"
                          style={{ outline: "none", width: 432 }}
                        >
                          <div>
                            <div
                              tabIndex={-1}
                              style={{ width: "100%", display: "inline-block" }}
                            >
                              <a
                                href="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                target="_blank"
                                className="text-dark"
                              >
                                <div className="">
                                  <div className="eventGridFlex position-relative">
                                    <iframe
                                      src="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                      title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                      // frameBorder={0}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      // allowFullScreen=""
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 pt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
                  <h3 className="sec-title Whatour">
                    What our customer are saying
                    <p className="quetePng">
                      <img src="assets/img/quete.png" className="mt-3" alt="" />
                    </p>
                  </h3>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex">
                  <img
                    src="assets/img/quete.png"
                    className="img-fluid quetePngMobile"
                    alt=""
                  />
                  <div className="customersayingBg">
                    <div className="slick-slider CustomerSlider sportSlider slick-initialized">
                      <div className="slick-list">
                        <div
                          className="slick-track"
                          style={{
                            width: 1080,
                            opacity: 1,
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        >
                          <div
                            data-index={0}
                            className="slick-slide slick-active slick-current"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{ outline: "none", width: 360 }}
                          >
                            <div>
                              <div
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="customerSaingBox">
                                  <div className="eventGridFlex">
                                    <img
                                      src="assets/img/employe.png"
                                      className="img-fluid coachImgCenetr"
                                      alt=""
                                    />
                                  </div>
                                  <h5 className="text-uppercase mt-1">
                                    Arpit Narvekar
                                  </h5>
                                  <p className="mb-0 mb-md-2">
                                    <img
                                      src="assets/img/quete_red.png"
                                      width="20px"
                                      alt=""
                                    />
                                  </p>
                                  <p>
                                    A step in the right direction, a much needed
                                    platform with a lot of transparency and
                                    great expertise to get our children ready to
                                    become the next big Athletes and sports
                                    person.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-index={1}
                            className="slick-slide slick-active"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{ outline: "none", width: 360 }}
                          >
                            <div>
                              <div
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="customerSaingBox">
                                  <div className="eventGridFlex">
                                    <img
                                      src="assets/img/employe.png"
                                      className="img-fluid coachImgCenetr"
                                      alt=""
                                    />
                                  </div>
                                  <h5 className="text-uppercase mt-1">
                                    Sandeep Patil
                                  </h5>
                                  <p className="mb-0 mb-md-2">
                                    <img
                                      src="assets/img/quete_red.png"
                                      width="20px"
                                      alt=""
                                    />
                                  </p>
                                  <p>
                                    There was a need for such a platform that
                                    helps my child grow physically and makes him
                                    mentally strong.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-index={2}
                            className="slick-slide slick-active"
                            tabIndex={-1}
                            aria-hidden="false"
                            style={{ outline: "none", width: 360 }}
                          >
                            <div>
                              <div
                                tabIndex={-1}
                                style={{
                                  width: "100%",
                                  display: "inline-block",
                                }}
                              >
                                <div className="customerSaingBox">
                                  <div className="eventGridFlex">
                                    <img
                                      src="assets/img/employe.png"
                                      className="img-fluid coachImgCenetr"
                                      alt=""
                                    />
                                  </div>
                                  <h5 className="text-uppercase mt-1">
                                    Tamrika Tyagi
                                  </h5>
                                  <p className="mb-0 mb-md-2">
                                    <img
                                      src="assets/img/quete_red.png"
                                      width="20px"
                                      alt=""
                                    />
                                  </p>
                                  <p>
                                    Gamehunt Academy has taken away the worry of
                                    our childs security when he goes for his
                                    training outside school, very reliable and
                                    trustworthy.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="CounterBG">
            <div className="container">
              <div className="">
                <div className="counterGrid text-center align-items-center">
                  <div className="d-flex gap-3 align-items-center">
                    <img src="assets/img/Countusers.png" alt="" className="" />
                    <div className="gapFlex">
                      <h2 className="mb-0 fw-bold">
                        <span>2500</span>
                      </h2>
                      <h6>
                        <span className="numOfCounter">Users</span>
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <img src="assets/img/Countvenues.png" alt="" className="" />
                    <div className="gapFlex">
                      <h2 className="mb-0 fw-bold">
                        <span>489</span>
                      </h2>
                      <h6>
                        <span className="numOfCounter">Venues</span>
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <img
                      src="assets/img/Countcoaches.png"
                      alt=""
                      className=""
                    />
                    <div className="gapFlex">
                      <h2 className="mb-0 fw-bold">
                        <span>412</span>
                      </h2>
                      <h6>
                        <span className="numOfCounter">Coaches </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer position-relative">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="widget">
                    <h3>Useful Links</h3>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <ul className="footer-li">
                          <li>
                            <a href="/">home</a>
                          </li>
                          <li>
                            <a href="/faq">faq</a>
                          </li>
                          <li>
                            <a href="/about-us">about us</a>
                          </li>
                          <li>
                            <a href="/privacy-policy">privacy policy</a>
                          </li>
                          <li>
                            <a href="/contact-us">contact us</a>
                          </li>
                          <li>
                            <a href="/terms-conditions">
                              terms &amp; conditions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="widget getAppFla">
                    <h3>Get Mobile App</h3>
                    <p>
                      <img
                        src="assets/img/Googleplay.png"
                        alt=""
                        className="mt-2 me-2 appIconImg"
                      />
                      <img
                        src="assets/img/Appstore.png"
                        alt=""
                        className="mt-2 appIconImg"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-sm-12 col-md-6 col-lg-6 mb-2 text-center text-md-start fw-bold">
                    © GameHunt 2022. All rights reserved
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                    <div className="linkSocial d-md-flex d-grid align-items-center justify-content-center justify-content-md-end gap-2">
                      <span>Follow Us:</span>
                      <ul className="Social-Links">
                        <li>
                          <a
                            href="https://www.facebook.com/gamehuntofficial"
                            target="_blank"
                          >
                            <img
                              src="assets/img/facebook.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/gamehunt_india"
                            target="_blank"
                          >
                            <img
                              src="assets/img/Twitter.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/gamehuntofficial"
                            target="_blank"
                          >
                            <img
                              src="assets/img/linkedin.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/gamehuntofficial/"
                            target="_blank"
                          >
                            <img
                              src="assets/img/Instagram.png"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
        {/* Modal */}
        <div
          className="modal fade"
          id="LoginModal"
          tabIndex={-1}
          aria-labelledby="LoginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style mt-5 pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center mb-4">
                          <h2 className="mdl-ttl">log in</h2>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Phone Number"
                            />
                            <img
                              src="assets/img/mobile.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <div className="">
                              <input
                                className="styled-checkbox"
                                id="RememberMe"
                                type="checkbox"
                                name="RememberMe"
                              />
                              <label htmlFor="RememberMe" className="w-100">
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <a
                            href="venues-listing.html"
                            className="btn btn-submit w-75"
                          >
                            Continue
                          </a>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog">or</span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <p
                            className="loginwithEmailBtn btn w-75"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#LoginEmailModal"
                          >
                            <img src="assets/img/EmailArrowRight.png" alt="" />{" "}
                            Login with Email
                          </p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog">or</span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                            <img src="assets/img/facebook.png" alt="" />
                            <img src="assets/img/Google.png" alt="" />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          Not register Yet ?{" "}
                          <span
                            className="theme-color cursor-pointer fw-bold"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#createAccountModal"
                          >
                            Create an Account
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="LoginEmailModal"
          tabIndex={-1}
          aria-labelledby="LoginEmailModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center mb-4">
                          <h2 className="mdl-ttl">log in</h2>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email ID"
                            />
                            <img
                              src="assets/img/email.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control ps-5"
                              placeholder="Password"
                            />
                            <img
                              src="assets/img/password.png"
                              className="input-img pass"
                              alt=""
                            />
                            <span
                              // toggle="#password-field"
                              className="pass-view field-icon toggle-password"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-2 text-end">
                          <div className="input-container">
                            <p className="mb-0">
                              <span
                                className="theme-color cursor-pointer fw-bold"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                data-bs-toggle="modal"
                                data-bs-target="#ForgotModal"
                              >
                                Forgot Password?
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <div className="">
                              <input
                                className="styled-checkbox"
                                id="EmailRememberMe"
                                type="checkbox"
                                name="RememberMe"
                              />
                              <label
                                htmlFor="EmailRememberMe"
                                className="w-100"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <a
                            href="curriculum-registered.html"
                            className="btn btn-submit w-75"
                          >
                            Continue
                          </a>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog">or</span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <p
                            className="loginwithEmailBtn btn w-75"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#LoginModal"
                          >
                            Login with Phone Number
                          </p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog">or</span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                            <img src="assets/img/facebook.png" alt="" />
                            <img src="assets/img/Google.png" alt="" />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          Not register Yet ?{" "}
                          <span
                            className="theme-color cursor-pointer fw-bold"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#createAccountModal"
                          >
                            Create an Account
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="createAccountModal"
          tabIndex={-1}
          aria-labelledby="createAccountModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgSignUpImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center mb-4">
                          <h2 className="mdl-ttl">sign up</h2>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="First Name"
                            />
                            <img
                              src="assets/img/userBlack.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Last Name"
                            />
                            <img
                              src="assets/img/userBlack.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email Address"
                            />
                            <img
                              src="assets/img/email.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control ps-5"
                              placeholder="Password"
                            />
                            <img
                              src="assets/img/password.png"
                              className="input-img pass"
                              alt=""
                            />
                            <span
                              // toggle="#password-field"
                              className="pass-view field-icon toggle-password"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control ps-5"
                              placeholder="Confirm Password"
                            />
                            <img
                              src="assets/img/password.png"
                              className="input-img pass"
                              alt=""
                            />
                            <span
                              // toggle="password-field"
                              className="pass-view field-icon toggle-password"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <a
                            href="curriculum-registered.html"
                            className="btn btn-submit w-75"
                          >
                            Sign up
                          </a>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog">or</span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <p className="loginwithEmailBtn btn w-75">
                            Sign with Phone Number
                          </p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="orLine">
                            <span className="orLog signOr">
                              or use one of these option
                            </span>
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                            <img src="assets/img/facebook.png" alt="" />
                            <img src="assets/img/Google.png" alt="" />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          Already have an account ?{" "}
                          <span
                            className="theme-color cursor-pointer fw-bold"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#LoginModal"
                          >
                            Login
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="ForgotModal"
          tabIndex={-1}
          aria-labelledby="ForgotModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <h2 className="mdl-ttl">forgot password</h2>
                          <p>
                            In order to retrieve your password, please enter
                            registered email address
                          </p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          <div className="">
                            <img
                              src="assets/img/Forgot.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              type="email"
                              className="form-control ps-5"
                              placeholder="Email ID"
                            />
                            <img
                              src="assets/img/email.png"
                              className="input-img"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          <span
                            className="btn btn-submit"
                            data-bs-dismiss="modal"
                            data-bs-toggle="modal"
                            data-bs-target="#OTPModal"
                          >
                            Submit
                          </span>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          Not register Yet ?{" "}
                          <span
                            className="theme-color cursor-pointer fw-bold"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-bs-toggle="modal"
                            data-bs-target="#createAccountModal"
                          >
                            Create an Account
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="OTPModal"
          tabIndex={-1}
          aria-labelledby="OTPModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style mt-5 pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <h2 className="mdl-ttl">OTP Verification</h2>
                          <p>
                            Please enter 6 digit code which has been send on
                            your registered email address.
                          </p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          <div className="">
                            <img
                              src="assets/img/OTPVery.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="passcode-wrapper">
                            <input
                              id="codeBox1"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                            <input
                              id="codeBox2"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                            <input
                              id="codeBox3"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                            <input
                              id="codeBox4"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                            <input
                              id="codeBox5"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                            <input
                              id="codeBox6"
                              type="number"
                              maxLength={1}
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-3">
                          <p className="otp-timing">00:35</p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <span
                            className="btn btn-submit"
                            data-bs-dismiss="modal"
                            data-bs-toggle="modal"
                            data-bs-target="#ResetModal"
                          >
                            Verify
                          </span>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-4">
                          <a href="#" className="forgot-pass theme-color">
                            Resend Code
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="ResetModal"
          tabIndex={-1}
          aria-labelledby="ResetModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
                    <div className="logo-bg position-relative">
                      {/*		          <img src="assets/img/gamehuntlogo.png" class="logo-icon" alt="logo">*/}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style mt-5 pe-2">
                      <form className="row">
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <h2 className="mdl-ttl">reset password</h2>
                          <p>Please reset your password here</p>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                          <div className="">
                            <img
                              src="assets/img/Password_graphic.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control ps-5"
                              placeholder="Set New Password"
                            />
                            <img
                              src="assets/img/password.png"
                              className="input-img pass"
                              alt=""
                            />
                            <span
                              // toggle="#password-field"
                              className="pass-view field-icon toggle-password"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="input-container">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control ps-5"
                              placeholder="Set Confirm New Password"
                            />
                            <img
                              src="assets/img/password.png"
                              className="input-img"
                              alt=""
                            />
                            <span
                              // toggle="#password-field"
                              className="pass-view field-icon toggle-password"
                            />
                          </div>
                        </div>
                        <div className="form-group col-sm-12 col-md-12 text-center">
                          <button className="btn btn-submit">Done</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="PartnerModal"
          tabIndex={-1}
          aria-labelledby="PartnerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-body p-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div className="row fliprow">
                  <div className="col-sm-12 col-md-12 col-lg-6 bgloginImgvenue pb-1">
                    <div className="logo-bg position-relative">
                      <img
                        src="assets/img/gamehuntlogo.png"
                        className="logo-icon"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                    <ul
                      className="nav nav-pills mb-2 justify-content-center tabsnew"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active text-capitalize"
                          type="button"
                          role="tab"
                        >
                          <img
                            src="assets/img/venueName_red.png"
                            className="selectIcon"
                            alt=""
                          />
                          <img
                            src="assets/img/venueName.png"
                            className="UnselectIcon"
                            alt=""
                          />
                          venues
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link text-capitalize"
                          type="button"
                          role="tab"
                        >
                          <img
                            src="assets/img/coachIcon_red.png"
                            className="selectIcon"
                            alt=""
                          />
                          <img
                            src="assets/img/coachIcon.png"
                            className="UnselectIcon"
                            alt=""
                          />
                          coach
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pe-2" id="pills-tabContent">
                      <div className="form-style mt-3 mt-md-5 px-4">
                        <form className="">
                          <div className="row">
                            <div className="col-sm-12 col-md-12 text-center mb-3">
                              <h2 className="mdl-ttl">Login</h2>
                            </div>
                            <div className="col-sm-12 col-md-12 mb-4">
                              <div className="form-group">
                                <div className="input-container">
                                  <input
                                    className="form-control ps-5"
                                    placeholder="Email Address"
                                    name="email"
                                    defaultValue=""
                                  />
                                  <img
                                    src="assets/img/email.png"
                                    className="input-img"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 mb-1">
                              <div className="form-group">
                                <div className="input-container">
                                  <input
                                    id="password-field"
                                    type="password"
                                    name="password"
                                    className="form-control ps-5"
                                    placeholder="Password"
                                    defaultValue=""
                                  />
                                  <img
                                    src="assets/img/password.png"
                                    className="input-img"
                                    alt=""
                                  />
                                  <span className="pass-view field-icon toggle-password" />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 text-end mb-1">
                              <p className="mb-0">
                                <span className="theme-color cursor-pointer fw-bold">
                                  Forgot Password?
                                </span>
                              </p>
                            </div>
                            <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                              <div className="input-container">
                                <div className="">
                                  <input
                                    className="styled-checkbox"
                                    id="RememberMe"
                                    type="checkbox"
                                    name="RememberMe"
                                  />
                                  <label htmlFor="RememberMe" className="w-100">
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 text-center">
                              <button
                                type="submit"
                                className="btn btn-submit mt-0"
                              >
                                Login
                              </button>
                            </div>
                            <div className="text-center my-5">
                              Not register Yet ?{" "}
                              <span className="theme-color cursor-pointer fw-bold">
                                Create an Account
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
