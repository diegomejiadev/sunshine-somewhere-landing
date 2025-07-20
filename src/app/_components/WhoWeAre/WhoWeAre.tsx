"use client";

import { Fade } from "@/ui";
import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export const WhoWeAre = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      // className={cn("container grid xl:grid-cols-2 xl:items-center", className)}
      className={cn("", className)}
      {...props}
    >
      <div className="max-container">
        <Fade direction="right">
          <p className="text-center text-xs font-bold uppercase text-gray-20 xl:text-sm">
            About Us
          </p>
          <h1 className="text-center font-serif text-2xl font-semibold tracking-wide decoration-2 underline-offset-4 md:text-3xl 3xl:text-5xl">
            SUNSHINE SOMEWHERE
          </h1>
        </Fade>
        <Fade className="mt-2">
          <h3 className="text-balance text-center text-sm font-medium text-gray-30 3xl:text-base">
            The best vacation rental company in Southwest Florida!
          </h3>
        </Fade>

        <Fade className="mx-auto mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-4 3xl:gap-8">
          <div className="mx-auto flex w-4/5 flex-col items-center rounded-xl bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full 3xl:py-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary-50 3xl:size-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                className="3xl:size-8"
              >
                <path
                  fill="white"
                  d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7z"
                />
              </svg>
            </div>
            <p className="mt-4 text-center text-sm font-bold uppercase 3xl:mt-6 3xl:text-lg">
              Excellent locations
            </p>

            <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700 3xl:text-base 3xl:leading-relaxed">
              We specialize in showcasing a selection of beautiful and luxurious
              properties in{" "}
              <span className="font-bold text-primary-800">
                Naples, Bonita Springs, Estero, Fort Myers, Cape Coral
              </span>
              , and more.
            </p>
          </div>
          <div className="mx-auto flex w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full 3xl:py-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 3xl:size-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2em"
                viewBox="0 0 24 24"
                className="3xl:size-8"
              >
                <g
                  fill="white"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </g>
              </svg>
            </div>
            <p className="mt-4 text-center text-sm font-bold uppercase 3xl:mt-6 3xl:text-lg">
              Top tier properties
            </p>

            <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700 3xl:text-base 3xl:leading-relaxed">
              Each and every property is very well maintained and fully equipped
              to include everything you may need to have a great vacation.
            </p>
          </div>
          <div className="mx-auto flex w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full 3xl:py-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-secondary-50 3xl:size-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2rem"
                viewBox="0 0 24 24"
                className="3xl:size-8"
              >
                <g fill="none">
                  <path
                    fill="white"
                    d="M10 5.196c1.5-2.598 5.098-2.83 7.696-1.33s4.196 4.732 2.696 7.33l-3.464-2l-1.732-1l-1.732-1z"
                  />
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.696 3.866C15.098 2.366 11.5 2.598 10 5.196l3.464 2m4.232-3.33c2.598 1.5 4.196 4.732 2.696 7.33l-5.196-3m2.5-4.33l.5-.866m-.5.866c-1.821.488-2.982 1.165-4.232 3.33m4.232-3.33c.488 1.821.482 3.165-.768 5.33m-1.732-1l-1.732-1m1.732 1l-3 5.196M3 21l.88-1.056a2 2 0 0 1 3.139.08v0a2 2 0 0 0 3.107.118l.19-.218a2.236 2.236 0 0 1 3.367 0l.191.218c.838.957 2.344.9 3.107-.117v0a2 2 0 0 1 3.14-.08L21 21M6.708 16A7.97 7.97 0 0 1 12 14a7.97 7.97 0 0 1 5.292 2"
                  />
                </g>
              </svg>
            </div>
            <p className="mt-4 text-center text-sm font-bold uppercase 3xl:mt-6 3xl:text-lg">
              Closer to the best places
            </p>

            <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700 3xl:text-base 3xl:leading-relaxed">
              A few minutes away from{" "}
              <span className="font-bold text-primary-800">
                Vanderbilt Beach
              </span>
              , Mercato, and Waterside Shops. Other properties are close to{" "}
              <span className="font-bold text-primary-800">
                Downtown Naples
              </span>
              , Naples Pier, and more!
            </p>
          </div>
          <div className="mx-auto flex w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full 3xl:py-12">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary-50 3xl:size-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2rem"
                height="1.2em"
                viewBox="0 0 24 24"
                className="3xl:size-8"
              >
                <g
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </g>
              </svg>
            </div>
            <p className="mt-4 text-center text-sm font-bold uppercase 3xl:mt-6 3xl:text-lg">
              Activities and more
            </p>

            <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700 3xl:text-base 3xl:leading-relaxed">
              From visiting Everglades National Park to enjoying the boating,
              camping, kayaking, bird watching, wild life viewing, we have it
              all. We can also help you with the best entertainment options in
              the area.
            </p>
          </div>
        </Fade>

        <Fade className="mx-auto mt-8 max-h-[600px] lg:hidden">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 7000 }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="embla__us_slide pb-1">
                <div className="mx-auto flex h-[250px] w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-secondary-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7z"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-center text-sm font-bold uppercase">
                    Excellent locations
                  </p>

                  <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700">
                    We specialize in showcasing a selection of beautiful and
                    luxurious properties in{" "}
                    <span className="font-bold text-primary-800">
                      Naples, Bonita Springs, Estero, Fort Myers, Cape Coral
                    </span>
                    , and more.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="embla__us_slide pb-1">
                <div className="mx-auto flex h-[250px] w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2rem"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </g>
                    </svg>
                  </div>
                  <p className="mt-4 text-center text-sm font-bold uppercase">
                    Top tier properties
                  </p>

                  <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700">
                    Each and every property is very well maintained and fully
                    equipped to include everything you may need to have a great
                    vacation.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="embla__us_slide pb-1">
                <div className="mx-auto flex h-[250px] w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-secondary-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2rem"
                      height="1.2rem"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="white"
                          d="M10 5.196c1.5-2.598 5.098-2.83 7.696-1.33s4.196 4.732 2.696 7.33l-3.464-2l-1.732-1l-1.732-1z"
                        />
                        <path
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.696 3.866C15.098 2.366 11.5 2.598 10 5.196l3.464 2m4.232-3.33c2.598 1.5 4.196 4.732 2.696 7.33l-5.196-3m2.5-4.33l.5-.866m-.5.866c-1.821.488-2.982 1.165-4.232 3.33m4.232-3.33c.488 1.821.482 3.165-.768 5.33m-1.732-1l-1.732-1m1.732 1l-3 5.196M3 21l.88-1.056a2 2 0 0 1 3.139.08v0a2 2 0 0 0 3.107.118l.19-.218a2.236 2.236 0 0 1 3.367 0l.191.218c.838.957 2.344.9 3.107-.117v0a2 2 0 0 1 3.14-.08L21 21M6.708 16A7.97 7.97 0 0 1 12 14a7.97 7.97 0 0 1 5.292 2"
                        />
                      </g>
                    </svg>
                  </div>
                  <p className="mt-4 text-center text-sm font-bold uppercase">
                    Closer to the best places
                  </p>

                  <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700">
                    A few minutes away from{" "}
                    <span className="font-bold text-primary-800">
                      Vanderbilt Beach
                    </span>
                    , Mercato, and Waterside Shops. Other properties are close
                    to{" "}
                    <span className="font-bold text-primary-800">
                      Downtown Naples
                    </span>
                    , Naples Pier, and more!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="embla__us_slide pb-1">
                <div className="mx-auto flex h-[250px] w-4/5 flex-col items-center rounded-xl  bg-white px-4 py-8 shadow-md transition-all duration-300 hover:shadow-xl xs:w-full">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2rem"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </g>
                    </svg>
                  </div>
                  <p className="mt-4 text-center text-sm font-bold uppercase">
                    Activities and more
                  </p>

                  <p className="mt-2 text-balance text-center text-xs leading-5 tracking-wide text-gray-700">
                    From visiting Everglades National Park to enjoying the
                    boating, camping, kayaking, bird watching, wild life
                    viewing, we have it all. We can also help you with the best
                    entertainment options in the area.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Fade>
      </div>
    </div>
  );
};
