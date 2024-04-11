import React from "react";

const OnlineSession = () => {
  return (
    <>
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
    </>
  );
};

export default OnlineSession;
