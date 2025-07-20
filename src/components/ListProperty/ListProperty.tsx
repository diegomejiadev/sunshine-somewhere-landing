import { IMAGE_ALT } from "@/constants";
import { Button, Fade, MotionStagger, MotionStaggerProps } from "@/ui";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

export const ListProperty = ({ className, ...props }: MotionStaggerProps) => {
  return (
    <MotionStagger className={cn(className)} {...props}>
      <div className="relative h-[250px] w-full xs:h-[320px] md:h-[400px] xl:h-[500px]">
        <Fade className="absolute left-0 top-0 z-0 h-full w-full">
          <div className="absolute z-10 h-full w-full bg-slate-900 opacity-80"></div>
          <Image
            src="https://res.cloudinary.com/purplesoda/image/upload/v1691728645/Dominguez%20Property%20Management/Services/property_management.webp"
            alt={IMAGE_ALT}
            fill
            className="object-cover"
          />
        </Fade>
        <Fade
          direction="right"
          className="max-container relative z-20 flex h-full w-full flex-col items-center justify-center"
        >
          <h2 className="text-center font-serif text-xl font-semibold text-white md:text-2xl lg:text-3xl 2xl:text-4xl">
            Do you have a Property you want to List with Us?
          </h2>
          <div className="my-3 h-[2px] w-full bg-white md:my-6"></div>
          <Button className="flex items-center justify-center gap-2 rounded-lg border-2 border-none bg-secondary-600 py-2 font-semibold text-white transition-all duration-300 hover:bg-secondary-700 md:text-lg lg:px-12">
            Find out how!
          </Button>
        </Fade>
      </div>
    </MotionStagger>
  );
};
