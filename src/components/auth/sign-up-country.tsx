"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SignUpFormCountry() {
  return (
    <div className="w-full max-w-sm p-3 space-y-6">
      <div className="w-64 h-20 justify-start text-black text-3xl font-black  leading-10">
        Sign up to Bhutan TDI
      </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email">
            <div className="w-72 h-7 justify-start text-zinc-500 text-base font-bold  leading-relaxed">
              Where are you from ?
            </div>
          </Label>
          <Input
            id="country"
            type="country"
            placeholder="Bhutan"
            className="mt-1 w-full h-11 rounded-[5px] border border-zinc-500"
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <Button
          type="submit"
          className="flex justify-center gap-3 w-full h-11 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg text-white text-base font-semibold  leading-normal"
        >
          Continue <ArrowRight />
        </Button>
      </form>
      <div className="flex items-center justify-between space-x-3">
        <div className="flex-1 h-px bg-zinc-300" />
        <div className="w-25 h-2 text-center text-zinc-300 text-[12px] font-bold  leading-3">
          Are you Vendors
        </div>
        <div className="flex-1 h-px bg-zinc-300" />
      </div>
      <Button variant="outline" className="w-80 h-11 bg-teal-900 rounded-[5px]">
        {/* you can swap this for an NDI icon if you have one */}
        Sign Up with Bhutan NDI
      </Button>
    </div>
  );
}
