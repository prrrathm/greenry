"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { X } from "lucide-react";

export default function CountrySelectionBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="relative top-0 left-0 z-50 w-full bg-black font-body text-white"
      role="banner"
    >
      <div className="container py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <p className="text-center text-sm md:text-left">
            Choose another country or region to see content specific to your
            locations.
          </p>
          <div className="flex flex-shrink-0 items-center gap-4">
            <Select defaultValue="India">
              <SelectTrigger className="w-[120px] rounded-md border-0 bg-white px-4 py-2 text-sm text-black focus:ring-0 focus:ring-offset-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="US">US</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={() => setIsVisible(false)}
              className="h-auto rounded-md bg-[#ffc905] px-8 py-2.5 text-base font-medium uppercase tracking-wider text-[#1B4B5C] hover:bg-[#d4af37]"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
