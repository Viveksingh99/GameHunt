"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TrainingByProfessionals = () => {
  const [data, setData] = useState<{ data: { coachesData: any[] } } | null>(
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
  const coachesData = data?.data?.coachesData ?? [];
  return (
    <>
      <section className="mt-4 pt-4">
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
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/cricket_ball_icon.png"
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
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/Footall.png"
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
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/Basketball.png"
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
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/table_tennis.png"
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
                    <Image
                      width={100}
                      height={100}
                      src="/assets/img/badminton.png"
                      alt=""
                      className="sportTabImg"
                    />
                    badminton
                  </button>
                </li>
              </ul>
              <div className="d-none">
                <div className="position-relative filterDrop">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/img/filter.png"
                    alt=""
                  />
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
              <div className="tab-content">
                <div className="position-relative">
                  <div className="programIMages">
                    <Carousel>
                      <CarouselContent>
                        {coachesData?.map((x: any, index: any) => (
                          <CarouselItem key={index} className="basis-1/3">
                            <div key={index} className="">
                              <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                <div className="position-relative">
                                  <a className="text-dark" href="#">
                                    <Image
                                      width={300}
                                      height={300}
                                      src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG"
                                      className="img-fluid tabImage"
                                      alt=""
                                    />
                                  </a>
                                  <div className="venueBoxIcons">
                                    <span className="votesRatingBg">
                                      0
                                      <Image
                                        width={500}
                                        height={500}
                                        src="/assets/img/star.png"
                                        alt=""
                                        className="start"
                                      />
                                    </span>{" "}
                                    0 votes
                                  </div>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/assets/img/Favoriteunselected.png"
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
                                    <Image
                                      width={100}
                                      height={100}
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
                                      <Image
                                        width={30}
                                        height={30}
                                        src="/assets/img/map_pins_icon.png"
                                        alt=""
                                        className="map_pins_icon"
                                      />
                                      1032.13Km
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
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
    </>
  );
};

export default TrainingByProfessionals;
