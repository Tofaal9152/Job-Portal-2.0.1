"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const jobs = [
  { name: "Frontend Developer" },
  { name: "Backend Developer" },
  { name: "Full Stack Developer" },
  { name: "UI/UX Designer" },
  { name: "Project Manager" },
  { name: "Data Scientist" },
  { name: "DevOps Engineer" },
  { name: "Product Manager" },
  { name: "Mobile Developer" },
  { name: "System Administrator" },
  { name: "QA Engineer" },
  { name: "Business Analyst" },
];

export function CarouselPlugin() {
  return (
    <Carousel className="w-full max-w-xl mx-auto mt-6">
      <CarouselContent>
        {jobs.map((item, index) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Button variant="outline">{item.name}</Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselPlugin;
