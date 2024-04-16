"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const OnlineSession = () => {
  const [data, setData] = useState<{ data: { onlineSession: any[] } } | null>(
    null
  );

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
  const onlineSessionData = data?.data?.onlineSession ?? [];
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
                    className="slick-track programIMages"
                    style={{
                      width: 1296,
                      opacity: 1,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <Carousel>
                      <CarouselContent>
                        {onlineSessionData?.map((x: any, index: any) => (
                          <CarouselItem key={index} className="basis-1/4">
                            <div
                              key={index}
                              className="slick-slide slick-active slick-current"
                            >
                              <div>
                                <div
                                  style={{
                                    display: "inline-block",
                                  }}
                                >
                                  <a
                                    href={x.link}
                                    target="_blank"
                                    className="text-dark"
                                  >
                                    <div className="eventGridFlex position-relative">
                                      <iframe
                                        src={x.image}
                                        title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
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
