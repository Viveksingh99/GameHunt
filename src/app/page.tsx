import AwardSection from "@/components/AwardSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OffersAndSportEvents from "@/components/OffersAndSportEvents";
import OnlineSession from "@/components/OnlineSession";
import TrainingByProfessionals from "@/components/TrainingByProfessionals";
import VenuesNearMe from "@/components/VenuesNearMe";
import WhatOurCustomerAreSaying from "@/components/WhatOurCustomerAreSaying";
import WhyChooseUs from "@/components/WhyChooseUs";

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

          {/* Hero section */}
          <Hero />
          {/* Hero section */}

          {/* Training by Professionals */}
          <TrainingByProfessionals />
          {/* Training by Professionals */}

          {/* Venues near me */}
          <VenuesNearMe />
          {/* Venues near me */}

          {/* Offers and Sport Events */}
          <OffersAndSportEvents />
          {/* Offers and Sport Events */}

          {/* Why Choose Us */}
          <WhyChooseUs />
          {/* Why Choose Us */}

          {/* Online Session */}
          <OnlineSession />
          {/* Online Session */}

          {/* What our customer are saying */}
          <WhatOurCustomerAreSaying />
          {/* What our customer are saying */}

          {/* AwardSection */}
          <AwardSection />
          {/* AwardSection */}

          {/* footer section */}
          <Footer />
          {/* footer section */}
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
