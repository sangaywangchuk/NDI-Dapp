"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Battery, Signal, Wifi } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function InitialLoginPage() {
  const router = useRouter();
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <Card className=" h-screen flex justify-center items-center bg-[url('/bg.png')] bg-cover bg-center  border-0">
        {/* Background image - using a pseudo-element for the background image */}
        <div className="absolute inset-0 bg-[url(/bg.png)] bg-cover bg-center opacity-100 mix-blend-overlay" />

        {/* Home indicator */}
        <div className="absolute w-[375px] h-[34px] bottom-0 left-0">
          <div className="relative w-[134px] h-[5px] top-[21px] left-[121px] bg-[#0f0604] rounded-[100px]" />
        </div>

        {/* Status bar */}
        <div className="absolute w-[375px] h-11 top-0 left-0">
          {/* Time */}
          <div className="absolute top-[17px] left-[33px] [font-family:'SF-Pro-Text',Helvetica] font-semibold text-white text-sm">
            9:41
          </div>

          {/* Right side icons */}
          <div className="absolute w-[67px] h-[11px] top-[17px] left-[294px] flex items-center justify-end space-x-1">
            <Signal className="w-[17px] h-[11px] text-white" />
            <Wifi className="w-[15px] h-[11px] text-white" />
            <Battery className="w-6 h-[11px] text-white" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-between h-full pt-[125px] pb-[78px] px-8">
          {/* Logo and title section */}
          <div className="flex flex-col items-center">
            {/* Vajra symbol */}
            {/* <div className="w-[146px] h-[146px] relative mb-4">
              <img src="" alt="Bhutan Vajra Symbol" className="w-full h-full" />
            </div> */}

            {/* Title */}
            <h1 className="[font-family:'Urbanist-Black',Helvetica] font-black text-white text-[40px] text-center tracking-[-0.80px] leading-[60px]">
              Bhutan TDI
            </h1>

            {/* Subtitle */}
            <p className="[font-family:'Urbanist-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[-0.40px] leading-[30px] mt-2">
              Travel To Bhutan, Explore Deeper
            </p>
          </div>

          {/* Bottom content */}
          <div className="flex flex-col items-center">
            {/* Main message */}
            <h2 className="[font-family:'Urbanist-Bold',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[33.6px] mb-6">
              Arrival To Departure, <br />
              You Are Verified
            </h2>

            {/* Description */}
            <p className="[font-family:'Urbanist-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[25.2px] mb-10">
              Your Passport To A Seamless Bhutan Journey.
            </p>

            {/* Button */}
            {/* <Link href="/auth/login"> */}
            <Button
              onClick={() => router.push("/auth/login")}
              className="w-[327px] z-20 h-14 rounded-lg bg-[linear-gradient(90deg,rgba(232,93,4,1)_0%,rgba(244,140,6,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(222,83,0,1)_0%,rgba(234,130,0,1)_60%)] border-0 flex items-center justify-center gap-2"
            >
              <span className="[font-family:'Urbanist-SemiBold',Helvetica] font-semibold text-white text-base tracking-[-0.32px] leading-6">
                Explore
              </span>
              <ArrowRight className="w-6 h-6 text-white" />
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </Card>
    </div>
  );
}
