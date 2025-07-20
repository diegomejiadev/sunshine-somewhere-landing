"use client";

import { IMAGE_ALT } from "@/constants";
import { MotionStagger, MotionStaggerProps } from "@/ui";
import { cn } from "@/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const ACTIVITIES: {
  title: string;
  description: string;
  buttonText: string;
  bottomText: string;
  imageUrl: string;
  objectPosition: string;
}[] = [
  {
    title: "Just a minutes from the beach",
    description:
      "Some of our luxurious vacation rentals are located in Naples Park, and just minutes away from Vanderbilt Beach, Mercato, and Waterside Shops.",
    buttonText: "I want go to the beach",
    bottomText: "VANDERBILT BEACH",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750287221/Sunshine%20Somewhere/slide2_bj9ovo.jpg",
    objectPosition: "",
  },

  {
    title: "Relax in our newly renovated pool",
    description:
      "Each and every property is very well maintained and fully equipped to include everything you may need to have a great vacation.",
    buttonText: "I want to see the pool",
    bottomText: "POOL HOME IN THE HEART OF NAPLES",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750293643/Sunshine%20Somewhere/properties/newly-renovated-pool/26_ysu5lt.jpg",
    objectPosition: "",
  },
  {
    title: "You can bring your 4 legged friend",
    description:
      "We are pet friendly! Many of our properties allow pets, so you can bring your pet friend along to the most desirable areas in Naples.",
    buttonText: "See the pet friendly properties",
    bottomText: "LARGE POOL HOME WITH LAKE VIEW",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750293724/Sunshine%20Somewhere/properties/sparkling-large-pool-home/29_pwso7z.jpg",
    objectPosition: "",
  },
  {
    title: `Let's go for a trip`,
    description:
      "We offer a variety of water tours, including dolphin watching, Shelling and Sightseeing Boat Cruises in Naples, Florida.",
    buttonText: "I want to see the dolphins",
    bottomText: "NAPLES WATER TOURS",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750473837/Sunshine%20Somewhere/activities/Dolphin_gacchn.jpg",
    objectPosition: "object-[70%_75%]",
  },
  {
    title: "Watch and explore the nature",
    description:
      "The Everglades National Park is a great place to visit while in Florida! It is the largest tropical wilderness in the U.S. and filled with biological treasures.",
    buttonText: "I want to see the Everglades",
    bottomText: "EVERGLADES NATIONAL PARK",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750473841/Sunshine%20Somewhere/activities/Everglades_hwv6gw.jpg",
    objectPosition: "object-[15%_75%] lg:object-[15%_0%]",
  },
  {
    title: "Maybe you want some fun close to the water",
    description:
      "We offer a variety of kayak, paddleboard, pontoon and deckboat rentals, Segway PT Tours, Kiteboarding, Wingfoil and Bike rentals.",
    buttonText: "I want to see the rentals",
    bottomText: "EXTREME FAMILY FUN SPOT",
    imageUrl:
      "https://res.cloudinary.com/purplesoda/image/upload/v1750472215/Sunshine%20Somewhere/content-1_n0mngz.jpg",
    objectPosition: "object-[15%_75%]",
  },
];

export const Banner = ({ className, ...props }: MotionStaggerProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
    Fade(),
  ]);
  const [isEmblaRendered, setIsEmblaRendered] = useState(false);

  useEffect(() => {
    setIsEmblaRendered(true);
  }, []);

  const handleNext = useCallback(() => {
    if (emblaApi?.canScrollNext()) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const handlePrev = useCallback(() => {
    if (emblaApi?.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  return (
    <MotionStagger className={cn(className, "embla")} {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="embla__viewport noselect relative h-[80vh] w-full lg:h-[85vh] xl:h-[80vh]"
        ref={emblaRef}
      >
        {isEmblaRendered && (
          <div className="embla__container h-full">
            {ACTIVITIES.map((activity) => {
              return (
                <div key={activity.title} className="embla__slide">
                  <div className="max-container relative z-50 flex h-full w-full flex-col">
                    <div className="mt-[40%] text-white sm:mt-[30vh] lg:mt-[25vh] 2xl:mt-[30vh]">
                      <h3 className="text-3xl font-medium xs:text-4xl md:text-5xl lg:text-4xl 3xl:text-6xl">
                        {activity.title}
                      </h3>
                      <p className="mt-2 text-balance text-sm leading-6 tracking-wide xs:mt-4 xs:text-base xs:leading-relaxed md:max-w-[600px] md:text-lg md:font-medium lg:text-base 2xl:max-w-[800px] 2xl:text-lg">
                        {activity.description}
                      </p>
                      <div className="mt-4 flex w-[80%] xs:w-[360px] lg:w-[400px] xl:w-[600px] 2xl:mt-8">
                        <button className="justify w-full cursor-pointer items-center border-2 border-white px-4 py-3 text-left transition-all duration-500 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50">
                          <span className="text-sm font-medium xs:text-base">
                            {activity.buttonText}
                          </span>
                        </button>
                        <button className="flex w-[6rem] items-center justify-center bg-white">
                          <Image
                            src="/icons/arrow-right.svg"
                            alt={`${IMAGE_ALT} Arrow`}
                            width={16}
                            height={16}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-[11rem] flex items-center gap-x-2 lg:bottom-[9rem]">
                      <div className="h-[2px] w-10 bg-white"></div>
                      <p className="font-medium text-white sm:text-lg">
                        {activity.bottomText}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-primary-alpha "></div>
                  <div className="absolute left-0 top-0 z-0 h-full w-full">
                    <Image
                      src={activity.imageUrl}
                      alt={`${IMAGE_ALT} Pool Property Management`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1020px) 90vw"
                      className={
                        "z-0 object-cover" + " " + activity.objectPosition
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          className="absolute bottom-[8rem] right-16 z-[100] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-105 xl:bottom-auto xl:left-10 xl:right-auto xl:top-1/2 xl:-translate-y-1/2 "
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
            className="size-6 rotate-180 xl:size-8 2xl:size-10"
          >
            <path
              fill="white"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </button>
        <button
          className="absolute bottom-[8rem] right-8 z-[100] cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-105 lg:bottom-auto xl:right-10 xl:top-1/2 xl:-translate-y-1/2"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
            className="size-6 xl:size-8 2xl:size-10"
          >
            <path
              fill="white"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </button>
      </motion.div>
    </MotionStagger>
  );
};
