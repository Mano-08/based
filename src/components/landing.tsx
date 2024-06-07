import React from "react";
import { BASED } from "./based";
import Link from "next/link";

function Landing() {
  const themes = ["OG", "1", "2"];

  return (
    <section className="bg-meme bg-[--blue] min-h-auto md:min-h-[95vh] flex flex-col items-start w-screen p-[2.5vw] pb-2 text-white">
      <div className="px-10 pt-8 md:p-0 md:block flex flex-col items-center justify-center w-full">
        <img
          src="https://assets-global.website-files.com/663b0e68b97cc609cd859232/663c54d3581b8a0c2a694c78_nav-logo.svg"
          loading="lazy"
          alt=""
          className="cursor-pointer h-[1.7rem] md:h-[2.3rem]"
        ></img>
      </div>

      <div className="flex flex-col items-center mx-auto relative pt-[8rem] md:p-0 md:-top-3">
        <div>
          <img
            src="https://assets-global.website-files.com/663b0e68b97cc609cd859232/663e39639dd289387e21b104_be-more-icon.png"
            loading="lazy"
            alt=""
            className="h-[1.5rem] md:h-[1.7rem] mb-[1.8rem]"
          ></img>
        </div>

        <BASED />

        <p className="text-[0.9rem] md:text-[1.2rem] leading-[1.5] max-w-[90vw] md:max-w-[40vw] text-center mt-8">
          The digital world is memetic. Join us for 48 hours of Open Edition
          mints with the most based onchain.
        </p>
      </div>

      <div className="flex items-center justify-center w-full">
        <Link
          href="/#art"
          className="relative cursor-pointer w-[13rem] md:w-[15rem] mt-[3rem] md:mt-[5rem]"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 198 57"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M186 4.00002V7.60578e-06L12 0V4.00001H8V8.00001H4V12H0V45H4V49H8V53L12 53V57L186 57V53H190V49H194V45H198V12H194V8.00001L190 8.00001V4.00001L186 4.00002Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-[--blue] text-lg absolute top-0 left-0 h-full w-full flex items-center justify-center">
            get based
          </p>
        </Link>
      </div>
      <div className="flex flex-row gap-3 items-center text-white relative pb-[4rem] pt-5 justify-center md:justify-start w-full md:p-0 md:-top-5">
        {themes.map((theme) => (
          <button
            key={theme}
            className="hover:bg-white text-[1.1rem] hover:text-[--blue] rounded-full px-3 py-1.5"
          >
            {theme}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Landing;
