"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import Navbar from "./Navbar";
import { LatestJobs } from "./LatestJobs";
import { FaSearch } from "react-icons/fa";
import { CarouselPlugin } from "./Carousel";

export function HeroTwo() {
  return (
    <div>
      <WavyBackground className="w-screen h-screen overflow-x-hidden">
        <div className="h-screen">
          <Navbar />
          <div className="max-w-4xl mx-auto mt-[10rem] space-y-6">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Search, Apply & Get Your Dream Jobs
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Discover opportunities, connect with employers, and take the next
              step in your career journey.
            </p>
            <div className="flex items-center w-full max-w-lg mx-auto mb-9 rounded-full shadow-lg overflow-hidden">
              <div className="bg-violet-600 p-4 pr-4  flex items-center justify-center cursor-pointer">
                <FaSearch className="text-white text-xl" />
              </div>
              <input
                type="search"
                placeholder="Search for jobs..."
                className="w-full px-6 py-3 outline-none  bg-white text-gray-800 text-lg "
              />
            </div>
            <CarouselPlugin />
          </div>
        </div>
        <div>
          <LatestJobs />
        </div>
      </WavyBackground>
    </div>
  );
}
