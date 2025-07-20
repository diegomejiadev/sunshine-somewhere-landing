"use client";

import { IProperty, PROPERTIES_LIST } from "@/constants/properties.cst";
import { MotionStagger, MotionStaggerProps } from "@/ui";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PropertyItem = ({ property }: { property: IProperty }) => {
  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-xl bg-blue-200">
        <Image
          src={property.mainImage}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1020px) 30vw, 25vw"
        />
      </div>
      <div className="mt-2 inline-flex w-auto items-center gap-x-1 rounded-full bg-primary-800 px-2 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width=".8rem"
          height=".8rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
          />
        </svg>
        <p className="text-[0.65rem] font-semibold text-gray-10 xl:text-xs">
          {property.location}
        </p>
      </div>
      <div className="mt-1 line-clamp-2 gap-x-0 text-balance text-xs font-medium sm:text-base xl:w-[90%]">
        <h3 className="text-sm font-medium xl:font-bold xl:uppercase">
          {property.name}
        </h3>
      </div>
    </div>
  );
};

export const SearchBar = ({ className, ...props }: MotionStaggerProps) => {
  const [selectedTab, setSelectedTab] = useState("vacations");
  const propertiesCarouselRef = useRef<any>(null);

  const nextSlide = useCallback(() => {
    if (propertiesCarouselRef?.current) {
      propertiesCarouselRef?.current?.slideNext();
    }
  }, [propertiesCarouselRef]);

  return (
    <MotionStagger className={cn(className)} {...props}>
      <div className="inline-flex rounded-t-xl rounded-tr-xl bg-white">
        <button
          onClick={() => setSelectedTab("vacations")}
          className={cn(
            "my-1 ml-1 inline-block cursor-pointer rounded-b-lg rounded-tl-xl rounded-tr-lg px-2 py-1 text-sm font-medium transition-all duration-300 lg:my-3 lg:ml-3 2xl:text-base",
            selectedTab === "vacations"
              ? "bg-secondary-500 text-white"
              : "text-primary-800 underline decoration-primary-300 decoration-2 underline-offset-4 hover:decoration-primary-500",
          )}
        >
          Vacations
        </button>
        <button
          onClick={() => setSelectedTab("our-guide")}
          className={cn(
            "my-1 inline-block cursor-pointer rounded-lg px-2 py-1 text-sm font-medium transition-all duration-300 lg:my-3 2xl:text-base",
            selectedTab === "our-guide"
              ? "bg-secondary-500 text-white"
              : "text-primary-800 underline decoration-primary-300 decoration-2 underline-offset-4 hover:decoration-primary-500",
          )}
        >
          Our guide
        </button>
        <button
          className={cn(
            "my-1 mr-1 inline-block cursor-pointer rounded-b-lg rounded-tl-lg rounded-tr-xl px-2 py-1 text-sm font-medium transition-all duration-300 lg:my-3 lg:mr-3 2xl:text-base",
            selectedTab === "property-management"
              ? "bg-secondary-500 text-white"
              : "text-primary-800 underline decoration-primary-300 decoration-2 underline-offset-4 hover:decoration-primary-500",
          )}
        >
          Property Management
        </button>
      </div>

      <div className="relative rounded-b-xl rounded-tr-sm bg-white shadow-chat">
        <AnimatePresence mode="wait">
          {selectedTab === "vacations" && (
            <motion.div
              key="vacations"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-x-5 overflow-x-auto px-4 pb-2 pt-4 md:gap-x-8 md:pb-6"
            >
              <Swiper
                onSwiper={(swiper) => (propertiesCarouselRef.current = swiper)}
                className="max-h-[300px] 2xl:max-h-[450px]"
                breakpoints={{
                  0: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3.4,
                    spaceBetween: 20,
                  },
                  1536: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}
              >
                {PROPERTIES_LIST.map((property) => (
                  <SwiperSlide key={property.slug}>
                    <PropertyItem property={property} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="absolute -right-4 top-1/2 z-10 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-chat transition-all duration-300 hover:scale-105 lg:-right-6 "
                onClick={nextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
                  />
                </svg>
              </button>
            </motion.div>
          )}
          {selectedTab === "our-guide" && (
            <motion.div
              key={"our-guide"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex gap-x-5 overflow-x-auto px-4 py-2"
            >
              <div>
                <div className="h-[17rem] w-[10rem] rounded-xl bg-blue-200"></div>
                <p>Guide 1</p>
              </div>
              <div>
                <div className="h-[17rem] w-[10rem] rounded-xl bg-blue-200"></div>
                <p>Guide 1</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionStagger>
  );
};
