import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[--blue] text-white py-[3.5rem] gap-[2rem]">
      <p>A Transient Labs x Base Production</p>
      <div className="flex flex-row gap-5">
        <div className="h-[2.5rem]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 57 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#Layer-1_clip0-47-177)">
              <path
                d="M57 34H31.2493V0L57 34Z"
                fill="url(#Layer-1_paint0-linear-47-177)"
              ></path>
              <path
                d="M0 0H25.7508V34L0 0Z"
                fill="url(#Layer-1_paint1-linear-47-177)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="Layer-1_paint0-linear-47-177"
                x1="44.1247"
                y1="0"
                x2="44.1247"
                y2="34"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.1" stopColor="white" stopOpacity="0.01"></stop>
                <stop offset="0.22" stopColor="white" stopOpacity="0.01"></stop>
                <stop
                  offset="0.36"
                  stopColor="white"
                  stopOpacity="0.0361"
                ></stop>
                <stop
                  offset="0.51"
                  stopColor="white"
                  stopOpacity="0.1156"
                ></stop>
                <stop
                  offset="0.68"
                  stopColor="white"
                  stopOpacity="0.2809"
                ></stop>
                <stop
                  offset="0.84"
                  stopColor="white"
                  stopOpacity="0.5776"
                ></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <linearGradient
                id="Layer-1_paint1-linear-47-177"
                x1="12.8754"
                y1="34"
                x2="12.8754"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0"></stop>
                <stop offset="0.1" stopColor="white" stopOpacity="0.01"></stop>
                <stop offset="0.22" stopColor="white" stopOpacity="0.01"></stop>
                <stop
                  offset="0.36"
                  stopColor="white"
                  stopOpacity="0.0361"
                ></stop>
                <stop
                  offset="0.51"
                  stopColor="white"
                  stopOpacity="0.1156"
                ></stop>
                <stop
                  offset="0.68"
                  stopColor="white"
                  stopOpacity="0.2809"
                ></stop>
                <stop
                  offset="0.84"
                  stopColor="white"
                  stopOpacity="0.5776"
                ></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <clipPath id="Layer-1_clip0-47-177">
                <rect width="57" height="34" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="h-[2.5rem]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9705 34C26.3757 34 34 26.389 34 16.9999C34 7.6107 26.3757 0 16.9705 0C7.56527 0 0.727056 6.851 0 15.5709H22.5092V18.4291H0C0.727056 27.149 8.04698 34 16.9705 34Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
