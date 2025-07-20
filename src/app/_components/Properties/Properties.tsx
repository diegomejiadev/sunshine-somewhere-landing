"use client";

import { Fade } from "@/ui";
import { cn } from "@/utils/cn";
import { HTMLAttributes, useCallback, useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { IMAGE_ALT } from "@/constants";
import { IProperty, PROPERTIES_LIST } from "@/constants/properties.cst";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Properties = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const propertiesCarouselRef = useRef<any>(null);
  const nextSlide = useCallback(() => {
    if (propertiesCarouselRef?.current) {
      propertiesCarouselRef?.current?.slideNext();
    }
  }, [propertiesCarouselRef]);
  const prevSlide = useCallback(() => {
    if (propertiesCarouselRef?.current) {
      propertiesCarouselRef?.current?.slidePrev();
    }
  }, [propertiesCarouselRef]);

  return (
    <div className={cn(className)} {...props}>
      <Fade direction="right" className="max-container mx-auto">
        <h2 className="text-3xl font-bold leading-normal md:text-4xl">
          Let&apos;s Create Memorable{" "}
          <span className="underline-secondary underline-offset-2">
            Vacations
          </span>
        </h2>
      </Fade>
      <Fade direction="right" className="max-container mx-auto">
        <p className="mt-2 text-balance text-sm leading-6 tracking-wide text-gray-30 md:font-medium">
          Each and every property is very well maintained and fully equipped to
          include everything you may need to have a great vacation.{" "}
        </p>
      </Fade>

      <Fade className="max-container relative max-h-[600px] 3xl:max-w-[80rem]">
        <button
          className="absolute -left-20 top-1/2 z-10 hidden size-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-chat transition-all duration-300 hover:scale-105 lg:flex"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
            className="rotate-180"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </button>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            propertiesCarouselRef.current = swiper;
          }}
          loop={true}
          autoplay={{ delay: 7000 }}
          modules={[Autoplay]}
          className={cn("relative mt-6 3xl:mt-12")}
        >
          {PROPERTIES_LIST.map((property) => (
            <SwiperSlide key={property.slug} className="h-full">
              <PropertyCarouselItem property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute -right-4 top-1/2 z-10 flex size-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-chat transition-all duration-300 hover:scale-105 lg:-right-20"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </button>
      </Fade>
    </div>
  );
};

const PropertyCarouselItem = ({ property }: { property: IProperty }) => {
  const propertyRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(propertyRef, {
    margin: "0px -20% 0px 0px",
  });

  return (
    <motion.div
      key={property.slug}
      transition={{
        duration: 0.8,
        type: "tween",
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        // y: isInView ? 0 : 10,
      }}
      className={cn("relative aspect-[9/11] md:aspect-[9/11]")}
      ref={propertyRef}
    >
      <div className="max-container relative h-full w-full overflow-hidden rounded-3xl ">
        {/* <div className="absolute z-20 h-full w-full rounded-3xl border-8 border-white/50 lg:border-[12px]"></div> */}
        <div className="absolute left-0 top-0 z-[100] flex flex-wrap items-center gap-2 px-2 py-4">
          {property.isPetFriendly && (
            <p className="flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73s-2.67-.39-3.46-1.96S1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72s-2.33 2.45-3.46 1.96s-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88s-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88"
                />
              </svg>
              <span className="text-white">Pet Friendly</span>
            </p>
          )}

          {property.hasPool && (
            <p className="flex items-center gap-2 rounded-full bg-primary-300 px-4 py-1 text-sm font-bold text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M2 15c1.67-.75 3.33-1.5 5-1.83V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H10a1 1 0 0 0-1 1v1h5V5a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H17a1 1 0 0 0-1 1v9.94c2-.32 4-1.94 6-1.94v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2zm12-7H9v2h5zm0 4H9v1c1.67.16 3.33 1.31 5 1.79zM2 19c2.22-1 4.44-2 6.67-2c2.22 0 4.44 2 6.66 2c2.23 0 4.45-2 6.67-2v2c-2.22 0-4.44 2-6.67 2c-2.22 0-4.44-2-6.66-2c-2.23 0-4.45 1-6.67 2z"
                />
              </svg>
              <span className="text-white">Has Pool</span>
            </p>
          )}

          {property.hasSpa && (
            <p className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-1 text-sm font-bold text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M15.5 9.63c-.19-2.79-1.32-5.51-3.44-7.63A12.25 12.25 0 0 0 8.5 9.63c1.29.68 2.47 1.56 3.5 2.63a14.2 14.2 0 0 1 3.5-2.63M12 15.45C9.85 12.17 6.18 10 2 10c0 10 9.32 11.89 10 12c.68-.12 10-2 10-12c-4.18 0-7.85 2.17-10 5.45"
                />
              </svg>
              <span className="text-white">Has Spa</span>
            </p>
          )}

          {property.isCloseToBeach && (
            <p className="flex items-center gap-2 rounded-full bg-secondary-700 px-4 py-1 text-sm font-bold text-slate-700">
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
              <span className="text-white">Close to Beach</span>
            </p>
          )}
        </div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-border"></div>
        <Image
          src={property.mainImage}
          alt={IMAGE_ALT}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1020px) 90vw"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 w-full p-4 lg:pb-6">
          <h3 className="text-lg font-semibold text-white md:text-base xl:text-lg 2xl:text-xl">
            {property.name}
          </h3>
          <div className="mt-1 inline-flex items-center gap-x-1 rounded-full bg-white px-2 py-1 xl:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0872cb"
                d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
              />
            </svg>
            <p className="text-xs font-medium text-primary-800 lg:text-sm xl:font-semibold">
              {property.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
