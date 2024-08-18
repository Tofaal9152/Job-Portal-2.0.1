"use client";

import * as React from "react";
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
            <Button
              className="bg-transparent text-white border-[#10B981] "
              variant="outline"
            >
              {item.name}
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent text-white border-[#10B981]" />
      <CarouselNext className="bg-transparent text-white border-[#10B981]" />
    </Carousel>
  );
}

export default CarouselPlugin;
