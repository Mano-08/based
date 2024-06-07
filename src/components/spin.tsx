import { Silkscreen } from "next/font/google";
import React from "react";

const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

function Spin() {
  return (
    <section className="md:h-screen h-[70vh] py-10 w-screen bg-white text-[--blue] flex flex-col gap-[3rem] items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <div className={` text-[2rem] font-[400]`}>How BASED are you?</div>
        <p>Tap to spin the wheel</p>
      </div>
      <div className="md:h[55vh] md:w-[55vh] h-[90vw] w-[90vw]">
        <iframe
          id="og-frame"
          className="h-full w-full border-0"
          src="https://art.transientlabs.xyz/Base-Wheel/base-wheel-OG-1.html"
        ></iframe>
      </div>
    </section>
  );
}

export default Spin;
