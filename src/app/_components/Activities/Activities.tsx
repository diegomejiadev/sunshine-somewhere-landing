import { IMAGE_ALT } from "@/constants";
import { Button, Fade, MotionStagger } from "@/ui";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import styles from "./Activities.module.css";
import Link from "next/link";

export const Activities = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <div className="flex flex-col gap-y-10 xl:hidden">
        <Fade direction="right" className="max-container">
          <h2 className="text-balance text-left text-3xl font-medium text-gray-700 md:text-4xl">
            Find the Perfect{" "}
            <span className="underline-secondary font-bold underline-offset-2">
              Activities
            </span>{" "}
            for you and your Family
          </h2>
        </Fade>
        {/* Activities */}
        <MotionStagger
          transition={{
            staggerChildren: 0.3,
          }}
          className="relative flex flex-col gap-y-4 overflow-x-hidden 3xl:w-full"
        >
          <Fade className="relative mx-auto aspect-video w-full max-w-[calc(100%-3rem)] overflow-hidden rounded-3xl shadow-chat sm:max-w-lg md:max-w-2xl lg:absolute lg:-right-16 lg:h-full lg:w-1/2 lg:max-w-full lg:rounded-none 3xl:right-0">
            <div className="absolute z-10 h-full w-full rounded-3xl bg-primary opacity-5 lg:rounded-none"></div>
            <Image
              src="https://res.cloudinary.com/purplesoda/image/upload/v1750473840/Sunshine%20Somewhere/activities/Bird_Garden_sbatjz.jpg"
              alt={`${IMAGE_ALT} Property Management`}
              fill
              className="z-0 rounded-3xl object-cover object-top lg:rounded-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
            />
          </Fade>

          <div className="max-container flex w-full flex-col gap-10 md:gap-28 lg:flex-row">
            <div className="relative flex-col gap-y-4 lg:w-1/2 lg:py-28 xl:w-[45%] 3xl:w-[40%]">
              <Fade>
                <h2 className="text-xl font-semibold text-secondary-800 xs:text-2xl lg:text-3xl">
                  Visit all attractions and activities in Florida
                </h2>
                <p className="mt-2 hidden text-balance text-sm font-medium leading-6 text-gray-700 sm:block">
                  From the beautiful beaches to the Everglades, there are so
                  many activities to do in Florida. Whether you want to relax on
                  the beach, go kayaking, or take a boat tour, there is
                  something for everyone.
                </p>
              </Fade>

              <Fade
                direction="right"
                className="mt-2 flex flex-col gap-y-4 lg:mt-4 lg:flex-row lg:gap-x-4 xl:mt-8 2xl:max-w-[500px]"
              >
                <Button className="flex w-full items-center justify-center gap-3 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="white"
                      d="M7.5 0L1 3.5V4h13v-.5zM2 5v5l-1 1.6V13h13v-1.4L13 10V5zm2 1h1v5.5H4zm3 0h1v5.5H7zm3 0h1v5.5h-1z"
                    />
                  </svg>
                  <span className="font-bold text-white">
                    I want to go to an activity
                  </span>
                </Button>
              </Fade>
            </div>
          </div>
        </MotionStagger>

        {/* Boat Excursions */}
        <MotionStagger
          transition={{
            staggerChildren: 0.3,
          }}
          className="3xl:max-container relative flex flex-col gap-y-4 overflow-x-hidden 3xl:w-full"
        >
          <Fade className="relative mx-auto aspect-video w-full max-w-[calc(100%-3rem)] overflow-hidden rounded-3xl shadow-chat sm:max-w-lg md:max-w-2xl lg:absolute lg:-right-16 lg:h-full lg:w-1/2 lg:max-w-full lg:rounded-none 3xl:right-0">
            <div className="absolute z-10 h-full w-full bg-primary opacity-5"></div>
            <Image
              src="https://res.cloudinary.com/purplesoda/image/upload/v1750473831/Sunshine%20Somewhere/activities/Pure_Florida_rh3stm.jpg"
              alt={`${IMAGE_ALT} Property Management`}
              fill
              className="z-0 object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
            />
          </Fade>
          <div className="max-container flex w-full flex-col gap-10 md:gap-28 lg:flex-row">
            <div className="relative flex-col gap-y-4 lg:w-1/2 lg:py-28 xl:w-[45%] 3xl:w-[40%]">
              <Fade>
                <h2 className="text-xl font-semibold text-secondary-800 xs:text-2xl lg:text-3xl">
                  Take a boat excursion in Naples and Cape Coral
                </h2>
                <p className="mt-2 hidden text-balance text-sm font-medium leading-6 text-gray-700 sm:block">
                  Experience the beauty of Florida&apos;s coastline with a boat
                  excursion. Whether you want to go fishing, dolphin watching,
                  or just enjoy the sunset, there are many options available.
                </p>
              </Fade>

              <Fade
                direction="right"
                className="mt-2 flex flex-col gap-y-4 lg:mt-4 lg:flex-row lg:gap-x-4 xl:mt-8 2xl:max-w-[500px]"
              >
                <Button className="flex w-full items-center justify-center gap-3 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M896 704H704q-27 0-45.5-19T640 640V128q0-27 18.5-45.5T704 64l256 576q0 26-18.5 45T896 704m-128 320H256q-55 0-116-43.5t-100.5-104T0 768h512V32q0-14 9.5-23T544 0t22.5 9t9.5 23v736h448q0 48-39.5 108.5T884 980.5T768 1024M384 704H128q-26 0-45-19t-19-45L384 64q27 0 45.5 18.5T448 128v512q0 26-18.5 45T384 704"
                    />
                  </svg>
                  <span className="font-bold text-white">
                    Go to a boat excursion
                  </span>
                </Button>
              </Fade>
            </div>
          </div>
        </MotionStagger>

        {/* Boats Kayak and Paddle Board Rentals */}
        <MotionStagger
          transition={{
            staggerChildren: 0.3,
          }}
          className="3xl:max-container relative flex flex-col gap-y-4 overflow-x-hidden 3xl:w-full"
        >
          <Fade className="relative mx-auto aspect-video w-full max-w-[calc(100%-3rem)] overflow-hidden rounded-3xl shadow-chat sm:max-w-lg md:max-w-2xl lg:absolute lg:-right-16 lg:h-full lg:w-1/2 lg:max-w-full lg:rounded-none 3xl:right-0">
            <div className="absolute z-10 h-full w-full rounded-3xl bg-primary opacity-5 lg:rounded-none"></div>
            <Image
              src="https://res.cloudinary.com/purplesoda/image/upload/v1750473832/Sunshine%20Somewhere/activities/Kayak_e59smx.jpg"
              alt={`${IMAGE_ALT} Property Management`}
              fill
              className="z-0 rounded-3xl object-cover object-top lg:rounded-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
            />
          </Fade>
          <div className="max-container flex w-full flex-col gap-10 md:gap-28 lg:flex-row">
            <div className="relative flex-col gap-y-4 lg:w-1/2 lg:py-28 xl:w-[45%] 3xl:w-[40%]">
              <Fade>
                <h2 className="text-xl font-semibold text-secondary-800 xs:text-2xl lg:text-3xl">
                  Rent a kayak, boat and a paddle board
                </h2>
                <p className="mt-2 hidden text-balance text-sm font-medium leading-6 text-gray-700 sm:block">
                  If you want to explore the waterways of Florida, renting a
                  kayak, boat, or paddle board is a great option. You can paddle
                  through the mangroves, go fishing, or just enjoy the scenery.
                </p>
              </Fade>

              <Fade
                direction="right"
                className="mt-2 flex flex-col gap-y-4 lg:mt-4 lg:flex-row lg:gap-x-4 xl:mt-8 2xl:max-w-[500px]"
              >
                <Button className="flex w-full items-center justify-center gap-3 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172L2.172 5l1.414 1.414a2 2 0 0 0 2.828 0m11.172 11.172a2 2 0 0 0 0 2.828L19 21.828L21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5m-15.5 10l5 5m1-11l5 5"
                    />
                  </svg>
                  <span className="font-bold text-white">
                    I want an adventure tour
                  </span>
                </Button>
              </Fade>
            </div>
          </div>
        </MotionStagger>
      </div>
      <div className="max-container hidden items-center gap-x-12 xl:flex 2xl:gap-x-16">
        <div className="w-[45%]">
          <Fade direction="right">
            <h2 className="text-balance text-left text-6xl font-medium leading-normal text-gray-700 2xl:text-7xl 2xl:leading-relaxed">
              Find the Perfect{" "}
              <span className="underline-secondary font-bold underline-offset-2">
                Activities
              </span>{" "}
              for you and your Family
            </h2>
          </Fade>
          <Fade direction="left" className="mt-2">
            <p className="max-w-[400px] text-balance text-left text-base font-medium leading-relaxed text-gray-700 2xl:text-lg">
              From the beautiful beaches to the Everglades, there are so many
              activities to do in Florida. Whether you want to relax, there is
              something for everyone.
            </p>
          </Fade>
          <MotionStagger
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.2,
            }}
            className="mt-8 flex w-[90%] flex-col gap-y-3 2xl:w-[85%] 2xl:gap-y-4"
          >
            <Fade>
              <Link href={"/"}>
                <Button className="flex w-full items-center justify-center gap-3 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 py-2 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="white"
                      d="M7.5 0L1 3.5V4h13v-.5zM2 5v5l-1 1.6V13h13v-1.4L13 10V5zm2 1h1v5.5H4zm3 0h1v5.5H7zm3 0h1v5.5h-1z"
                    />
                  </svg>
                  <span className="font-bold text-white">
                    Activities & Attractions
                  </span>
                </Button>
              </Link>
            </Fade>

            <Fade>
              <Link href={"/"}>
                <Button className="flex w-full items-center justify-center gap-2 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 py-2 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M896 704H704q-27 0-45.5-19T640 640V128q0-27 18.5-45.5T704 64l256 576q0 26-18.5 45T896 704m-128 320H256q-55 0-116-43.5t-100.5-104T0 768h512V32q0-14 9.5-23T544 0t22.5 9t9.5 23v736h448q0 48-39.5 108.5T884 980.5T768 1024M384 704H128q-26 0-45-19t-19-45L384 64q27 0 45.5 18.5T448 128v512q0 26-18.5 45T384 704"
                    />
                  </svg>
                  <span className="font-bold text-white">Boat Excursions</span>
                </Button>
              </Link>
            </Fade>

            <Fade>
              <Link href={"/"}>
                <Button className="flex w-full items-center justify-center gap-2 rounded-[50px] border-2 border-secondary-600 bg-secondary-600 py-2 transition-all duration-300 hover:bg-secondary-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172L2.172 5l1.414 1.414a2 2 0 0 0 2.828 0m11.172 11.172a2 2 0 0 0 0 2.828L19 21.828L21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11m4.5-15C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5m-15.5 10l5 5m1-11l5 5"
                    />
                  </svg>
                  <span className="font-bold text-white">
                    Boats, Kayak & Paddle Board Rentals
                  </span>
                </Button>
              </Link>
            </Fade>
          </MotionStagger>
        </div>
        <MotionStagger
          transition={{
            staggerChildren: 0.3,
            delayChildren: 0.2,
          }}
          className={cn("w-[55%] gap-4 2xl:gap-x-6 2xl:gap-y-8", styles.images)}
        >
          <Fade
            className={cn(
              "relative w-[300px] overflow-hidden rounded-3xl shadow-chat transition-all duration-300",
              styles.image1,
            )}
          >
            <div className="relative aspect-[9/11] h-[250px] w-full 2xl:h-[350px]">
              <Image
                src="https://res.cloudinary.com/purplesoda/image/upload/v1750473831/Sunshine%20Somewhere/activities/Pure_Florida_rh3stm.jpg"
                alt={`${IMAGE_ALT} Property Management`}
                fill
                className="object-cover object-[10%_5%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
              />
            </div>
            <div className="relative bg-white px-6 py-4">
              <div className="absolute -mt-8 rounded-lg bg-white px-4 py-1 shadow-chat">
                <h4 className="inline-flex text-sm font-bold text-gray-30">
                  Boat Excursions
                </h4>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800 2xl:text-xl">
                Pure Florida <span className="block">Boat Tours</span>
              </h3>
              <h4 className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-gray-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7b7b7b"
                    d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
                  />
                </svg>
                <span>Naples</span>
              </h4>
            </div>
          </Fade>

          <Fade
            className={cn(
              "relative w-[300px] overflow-hidden rounded-3xl shadow-chat",
              styles.image2,
            )}
          >
            <div className="relative aspect-[9/11] h-[250px] w-full 2xl:h-[350px]">
              <Image
                src="https://res.cloudinary.com/purplesoda/image/upload/v1750473840/Sunshine%20Somewhere/activities/Bird_Garden_sbatjz.jpg"
                alt={`${IMAGE_ALT} Property Management`}
                fill
                className="object-cover object-[10%_5%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
              />
            </div>
            <div className="relative bg-white px-6 py-4">
              <div className="absolute -mt-8 rounded-lg bg-white px-4 py-1 shadow-chat">
                <h4 className="inline-flex text-sm font-bold text-gray-30">
                  Activities & Attractions
                </h4>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800 2xl:text-xl">
                Bird Gardens and bird watching
              </h3>
              <h4 className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-gray-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7b7b7b"
                    d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
                  />
                </svg>
                <span>Naples</span>
              </h4>
            </div>
          </Fade>

          <Fade
            className={cn(
              "relative w-[300px] overflow-hidden rounded-3xl shadow-chat",
              styles.image3,
            )}
          >
            <div className="relative aspect-[9/11] h-[250px] w-full 2xl:h-[350px]">
              <Image
                src="https://res.cloudinary.com/purplesoda/image/upload/v1750473832/Sunshine%20Somewhere/activities/Kayak_e59smx.jpg"
                alt={`${IMAGE_ALT} Property Management`}
                fill
                className="object-cover object-[10%_5%]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
              />
            </div>
            <div className="relative bg-white px-6 py-4">
              <div className="absolute -mt-8 rounded-lg bg-white px-4 py-1 shadow-chat">
                <h4 className="inline-flex text-sm font-bold text-gray-30">
                  Paddleboard Rentals
                </h4>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800 2xl:text-xl">
                Napples Paddleboard Adventure Tours
              </h3>
              <h4 className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-gray-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2rem"
                  height="1.2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7b7b7b"
                    d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
                  />
                </svg>
                <span>Naples</span>
              </h4>
            </div>
          </Fade>
        </MotionStagger>
      </div>
    </div>
  );
};
