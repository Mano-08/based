import Link from "next/link";
import React from "react";

function CertifiedMints() {
  const data = [
    {
      href: "https://launchpad.transientlabs.xyz/stacks/glytchdbase",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6645017af9ad661ae7e3a285_holobleed-poster.jpg",
      video: "https://art.transientlabs.xyz/Base-Wheel/holobleed.mp4",
      title: "HoloBleed",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/force-demonetize-all-memes-be-more-based",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66461fd0b05987454c6b4a7e_ForceDemonetizeAllMemes-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/ForceDemonetizeAllMemes.mp4",
      title: "Demon Ego",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/halvingfun",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6646591055b271b712387a69_LORE-poster.jpg",
      video: "https://art.transientlabs.xyz/Base-Wheel/LORE.mp4",
      title: "Lore",
    },
  ];
  return (
    <section className="p-[7vw] border-t border-neutral-300">
      <div className="grid grid-cols-3 gap-[7vw]">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-4 text-[--blue]"
          >
            <Link target="_blank" href={item.href}>
              <video
                className="w-full h-[85vh] block object-cover rounded-[1.25rem]"
                poster={item.poster}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </Link>
            <h2 className="font-semibold leading-none">Certified Based 🔥</h2>
            <h1 className="text-[2.5rem] pb-2 leading-none">{item.title}</h1>
            <Link
              href={item.href}
              target="_blank"
              className="rounded-full shake px-8 py-5 align-ite bg-[--blue] text-white"
            >
              View Mint
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertifiedMints;
