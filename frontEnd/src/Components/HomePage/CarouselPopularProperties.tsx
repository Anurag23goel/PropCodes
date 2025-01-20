import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/Carousel";
import LongCard from "./LongCard";
import Autoplay from "embla-carousel-autoplay";

const CarouselPopularProperties = () => {
  return (
    <div className="w-full lg:w-full flex justify-center">
      <Carousel
        className="overflow-hidden"
        plugins={[
          Autoplay({
            delay: 3000, // Autoplay delay in milliseconds
          }),
        ]}
      >
        <CarouselContent className="flex gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 basis-1/1 md:basis-1/3 lg:basis-1/5"
            >
              <LongCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselPopularProperties;
