import Image from "next/image";
import React from "react";

const WhatOurCustomerAreSaying = () => {
  return (
    <>
      <section className="mt-4 pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
              <h3 className="sec-title Whatour">
                What our customer are saying
                <p className="quetePng">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/img/quete.png"
                    className="mt-3"
                    alt=""
                  />
                </p>
              </h3>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex">
              <Image
                height={20}
                width={20}
                src="/assets/img/quete.png"
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
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">
                                Arpit Narvekar
                              </h5>
                              <p className="mb-0 mb-md-2">
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/quete_red.png"
                                  alt=""
                                />
                              </p>
                              <p>
                                A step in the right direction, a much needed
                                platform with a lot of transparency and great
                                expertise to get our children ready to become
                                the next big Athletes and sports person.
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
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">
                                Sandeep Patil
                              </h5>
                              <p className="mb-0 mb-md-2">
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/quete_red.png"
                                  alt=""
                                />
                              </p>
                              <p>
                                There was a need for such a platform that helps
                                my child grow physically and makes him mentally
                                strong.
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
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/employe.png"
                                  className="img-fluid coachImgCenetr"
                                  alt=""
                                />
                              </div>
                              <h5 className="text-uppercase mt-1">
                                Tamrika Tyagi
                              </h5>
                              <p className="mb-0 mb-md-2">
                                <Image
                                  height={20}
                                  width={20}
                                  src="/assets/img/quete_red.png"
                                  alt=""
                                />
                              </p>
                              <p>
                                Gamehunt Academy has taken away the worry of our
                                childs security when he goes for his training
                                outside school, very reliable and trustworthy.
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
    </>
  );
};

export default WhatOurCustomerAreSaying;
