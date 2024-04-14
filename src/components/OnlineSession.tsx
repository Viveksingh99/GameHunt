"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const OnlineSession = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.thegamehunt.com/api/coach/homeScreen?longitude=&latitude"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const onlineSessionData = data?.data?.onlineSession;
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
                    {onlineSessionData?.map((x:any, index:any) => 
                       (
                        <div key={index}
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
                                href={x.link}
                                target="_blank"
                                className="text-dark"
                              >
                                <div className="">
                                  <div className="eventGridFlex position-relative">
                                    <iframe
                                      src={x.image}
                                      title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      )
                    )}
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
