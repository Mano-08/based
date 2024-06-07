"use client";
import { memes } from "@/utils/memes";
import Image from "next/image";
import { useState } from "react";

const length = memes.length;

export function BASED() {
  const [char, setChar] = useState<string>("");
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setChar(e.currentTarget.id);
  };
  const handleMouseLeave = () => {
    setChar("");
  };
  const data = [
    {
      char: "B",
      jsx: <B />,
    },
    {
      char: "A",
      jsx: <A />,
    },
    {
      char: "S",
      jsx: <S />,
    },
    {
      char: "E",
      jsx: <E />,
    },
    {
      char: "D",
      jsx: <D />,
    },
  ];
  return (
    <div className="relative flex flex-row h-auto md:h-[12rem] gap-2 md:gap-3 text-white">
      {data.map((item, index) => (
        <div
          key={index}
          id={item.char}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hidden md:block">
            <Image
              src={memes[Math.floor(Math.random() * length)].src as string}
              alt={item.char}
              height={192}
              width={192}
              className={
                char === item.char ? "absolute block bottom-0" : "hidden"
              }
            />
          </div>
          <div className="block md:hidden">
            <Image
              src={memes[Math.floor(Math.random() * length)].src as string}
              alt={item.char}
              height={76}
              width={76}
              className={
                char === item.char ? "absolute block bottom-0" : "hidden"
              }
            />
          </div>
          <div
            className={`${
              char === item.char ? "invisible" : "visible"
            } h-[5rem] md:h-[12rem]`}
          >
            {item.jsx}
          </div>
        </div>
      ))}
    </div>
  );
}

function B() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 92 144"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.1647 65.7906V78.7796H13.1695V143.753H0.180542V13.8064H13.1695V65.7906H52.1365H52.1647ZM52.1647 13.8064H13.1695V0.817444H52.1365V13.8064H52.1647ZM39.1475 117.747V130.736H26.1585V117.747H39.1475ZM39.1475 130.736H65.1255V143.725H39.1475V130.736ZM52.1647 26.7954V13.8064H65.1537V26.7954H52.1647ZM52.1647 52.8016H65.1537V65.7906H52.1647V52.8016ZM78.1427 78.7796V91.7686H52.1647V78.7796H78.1427ZM65.1537 52.8016V26.8236H78.1427V52.8016H65.1537ZM65.1537 117.747H78.1427V130.736H65.1537V117.747ZM91.1317 91.7686V117.747H78.1427V91.7686H91.1317Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function A() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 144 143"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.342773 129.918H13.3318V142.907H0.342773V129.918ZM13.3318 116.929H26.3208V129.918H13.3318V116.929ZM26.3208 103.94H39.3098V116.929H26.3208V103.94ZM39.3098 90.9511H52.2988V103.94H39.3098V90.9511ZM130.261 0H143.25V142.907H130.261V90.923H52.2988V77.934H65.2877V64.945H78.2767V77.934H130.233V25.978H117.244V12.989H130.233V0H130.261ZM91.2939 64.9731H78.3049V51.9842H91.2939V64.9731ZM104.283 51.9842H91.2939V38.9952H104.283V51.9842ZM117.272 38.967H104.283V25.978H117.272V38.967Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function S() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 79 143"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9333 51.9842H0.944336V26.0062H13.9333V51.9842ZM13.9333 116.929H0.944336V103.94H13.9333V116.929ZM13.9333 12.989H26.9223V25.978H13.9333V12.989ZM13.9333 51.9842H26.9223V64.9731H13.9333V51.9842ZM13.9333 116.929H26.9223V129.918H13.9333V116.929ZM52.9285 12.989H26.9505V0H52.9285V12.989ZM52.9285 77.9621H26.9505V64.9731H52.9285V77.9621ZM26.9223 129.918H52.9003V142.907H26.9223V129.918ZM65.9175 25.978H52.9285V12.989H65.9175V25.978ZM65.9175 90.9511H52.9285V77.9621H65.9175V90.9511ZM65.9175 129.918H52.9285V116.929H65.9175V129.918ZM65.9175 25.978H78.9065V38.967H65.9175V25.978ZM65.9175 90.9511H78.9065V116.929H65.9175V90.9511Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function E() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 144 143"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.106445 90.9511V51.9842H13.0954V64.9731H130.025V51.9842H143.014V77.9621H13.0954V90.9511H0.106445ZM26.0844 51.9842H13.0954V26.0062H26.0844V51.9842ZM13.0954 116.929V90.9511H26.0844V116.929H13.0954ZM52.0906 25.978H26.1126V12.989H52.0906V25.978ZM26.0844 129.918V116.929H52.0624V129.918H26.0844ZM91.0576 12.989H52.0906V0H91.0576V12.989ZM52.0906 142.907V129.918H91.0576V142.907H52.0906ZM91.0576 25.978V12.989H117.036V25.978H91.0576ZM117.036 129.918H91.0576V116.929H117.036V129.918ZM117.036 51.9842V26.0062H130.025V51.9842H117.036ZM130.025 116.929H117.036V103.94H130.025V116.929Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function D() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 118 143"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8791 12.989V129.918H65.8633V142.907H0.890137V0H65.8633V12.989H13.8791ZM91.8413 25.978H65.8633V12.989H91.8413V25.978ZM91.8413 129.918H65.8633V116.929H91.8413V129.918ZM91.8413 25.978H104.83V51.956H91.8413V25.978ZM104.83 116.929H91.8413V90.9511H104.83V116.929ZM104.83 51.9842H117.819V90.9511H104.83V51.9842Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
