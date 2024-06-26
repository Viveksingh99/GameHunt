import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
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
                              <Image
                                width={70}
                                height={70}
                                src="/assets/img/whychoose_icon1.png"
                                className="img-fluid ChooseUsIcon"
                                alt=""
                              />
                              <div className="text-white mt-4">
                                <h5 className="text-capitalize">
                                  Sports venues at fingertips
                                </h5>
                                <small className="ps-3">
                                  Heard anything better than a selection of
                                  sports venues that work with your schedule?
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
                              <Image
                                width={70}
                                height={70}
                                src="/assets/img/whychoose_icon2.png"
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
                              <Image
                                width={70}
                                height={70}
                                src="/assets/img/whychoose_icon3.png"
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
                              <Image
                                width={70}
                                height={70}
                                src="/assets/img/whychoose_icon4.png"
                                className="img-fluid ChooseUsIcon"
                                alt=""
                              />
                              <div className="text-white mt-4">
                                <h5 className="text-capitalize">
                                  Events &amp; Tournaments
                                </h5>
                                <small className="ps-3">
                                  The Gamehunt is d edicated to providing
                                  numerous opportunities for our young athletes
                                  to develop and showcase their skills at a
                                  competitive level.
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
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/whychoose_icon1.png"
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
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/whychoose_icon2.png"
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
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/whychoose_icon3.png"
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          The GAMEHUNT ACADEMY
                        </h5>
                        <small className="ps-3">
                          The Gamehunt Academy is a one-stop shop for schools
                          and students seeking sports and life skills.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                  <div className="text-center cursor-pointer whyChooseBox">
                    <div className="eventGridFlex">
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/whychoose_icon4.png"
                        className="img-fluid ChooseUsIcon"
                        alt=""
                      />
                      <div className="text-white mt-4">
                        <h5 className="text-capitalize">
                          Events &amp; Tournaments
                        </h5>
                        <small className="ps-3">
                          The Gamehunt is dedicated to providing numerous
                          opportunities for our young athletes to develop and
                          showcase their skills at a competitive level.
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
    </>
  );
};

export default WhyChooseUs;
