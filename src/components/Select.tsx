"use client";
import React, { useState } from "react";
import Image from "next/image";
import funnel from "@/Image/Funnel.svg";
import search from "@/Image/Search.svg";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Select() {
  // States for dropdown values
  const [selectedNumber, setSelectedNumber] = useState("10");
  const [selectedState, setSelectedState] = useState("Select");

  // States to manage dropdown visibility
  const [isNumberDropdownOpen, setNumberDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setStateDropdownOpen] = useState(false);

  return (
    <>
      <div className="border-b border-b-[#F1E5D1] flex justify-between items-center">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between w-full">
          {/* Left Side */}
          <div className="flex">
            {/* Number Dropdown */}
            <div className="pl-2 pr-2 py-3 relative">
              <button
                className="text-sm font-medium flex justify-center items-center"
                onClick={() => setNumberDropdownOpen(!isNumberDropdownOpen)}
              >
                {selectedNumber}
                <ChevronDownIcon
                  className={`ml-12 h-4 w-4 transition-transform ${
                    isNumberDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isNumberDropdownOpen && (
                <ul className="absolute bg-white shadow-md p-0 border mt-3 w-[85px]">
                  {[...Array(3)].map((_, index) => (
                    <li
                      key={index + 1}
                      className="cursor-pointer hover:bg-[#F4EBDD] px-2 py-1 border border-[#F1E5D1]"
                      onClick={() => {
                        setSelectedNumber((index + 1).toString());
                        setNumberDropdownOpen(false);
                      }}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* State Dropdown */}
            <div className="border border-[#F1E5D1] relative">
              <button
                className="flex justify-between pl-2 pr-2 items-center py-2"
                onClick={() => setStateDropdownOpen(!isStateDropdownOpen)}
              >
                {selectedState}
                <ChevronDownIcon
                  className={`ml-12 h-4 w-4 transition-transform ${
                    isStateDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isStateDropdownOpen && (
                <ul className="absolute bg-white shadow-md p-0 border  mt-1 w-[125px]">
                  {["State 1", "State 2", "State 3"].map((state, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:bg-[#F4EBDD] px-2 py-1 border border-[#F1E5D1]"
                      onClick={() => {
                        setSelectedState(state);
                        setStateDropdownOpen(false);
                      }}
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex">
            {/* Search Input */}
            <div className="border border-[#F1E5D1] flex items-center pr-5 pl-2 gap-3 text-xs font-normal">
              <Image src={search} alt="Search Icon" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full text-sm bg-transparent"
              />
            </div>
            <div className="px-2 py-2 flex items-center">
              <Image src={funnel} alt="Funnel Icon"></Image>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="border border-[#F1E5D1] flex items-center pr-2 pl-2 gap-3 text-xs font-normal lg:hidden">
          <Image src={search} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full text-sm bg-transparent"
          />
        </div>
      </div>
    </>
  );
}

export default Select;
