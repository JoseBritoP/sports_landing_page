import React from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { ButtonType } from "./shared/Button";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <main className={`relative h-[88vh] bg-banner bg-center bg-cover pt-20`}>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]" />
      <section className="relative z-10 flex items-center h-full text-gray-100">
        <div className="w-5/6 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Text content */}
          <div className="space-y-5 w-4/5">
            <p className="font-semibold sm:px-8 px-4 py-1 mb-1 text-base sm:text-lg bg-red-600 text-gray-200 w-fit uppercase">
              Football
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-8 md:leading-10 font-bold">
              THE WORLD CUP 2026 WHAT ARE THE EXCITING NEWS FOR US
            </h1>
            <div className="flex items-center space-x-14">
              <div className="flex items-center space-x-2 mt-1 sm:mt-4">
                <BiCalendar className="w-[1rem h-[1rem] text-white" />
                <p className="text-sm sm:text-lg text-white">
                  March 20,2024
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-1 sm:mt-4">
                <BiUser className="w-[1rem h-[1rem] text-white" />
                <p className="text-sm sm:text-lg text-white">
                  By webdev warrios
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <ButtonType label="Watch Highlights" type="banner"/>
              <ButtonType label="Learn More" type="bannerTwo"/>
            </div>
          </div>
          {/* Play button */}
          <div className="pt-5">
            <div className="w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-red-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden">
              <FaPlay className="w-[3rem] h-[3rem] text-white"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
