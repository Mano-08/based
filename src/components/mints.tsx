import React from "react";
import Link from "next/link";
import Image from "next/image";

function Mints() {
  const data = [
    {
      href: "https://launchpad.transientlabs.xyz/stacks/memecoin-supercycle",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6644c868386235f95e027809_memecoinsupercyclebyOSF-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/memecoin supercycle by OSF.mp4",
      title: "OFS",
      opensea:
        "https://opensea.io/assets/base/0xb2df409eb9f2b0dbd55f9822ab56ea144d12c696/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0xb2df409eb9f2b0dbd55f9822ab56ea144d12c696~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/dangiuz-cw",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6644c8693262b1748148d81b_ConnectWalletbyDangiuz-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/ConnectWalletbyDangiuz.mp4",
      title: "Dangiuz",
      opensea:
        "https://opensea.io/assets/base/0xe93f1e7bde9c0b95189f674573bfbf4dd0467466/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0xe93f1e7bde9c0b95189f674573bfbf4dd0467466~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/the-mememaker",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6644c8e34249419af4a0309e_MememakerbyRebeccaRose-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/Mememaker%20by%20Rebecca%20Rose.mp4",
      title: "Rebecca Rose",
      opensea: "https://launchpad.transientlabs.xyz/stacks/memecoin-supercycle",
      magiceden:
        "https://launchpad.transientlabs.xyz/stacks/memecoin-supercycle",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/lunch-smoke-break",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6643229b56f58aa991c87462_frog_pepe.jpg",
      title: "SHAKKABLOOD",
      opensea:
        "https://opensea.io/assets/base/0x242ce9fc13963a9e4bb22df7563d5cc3cea44d0c/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0x242ce9fc13963a9e4bb22df7563d5cc3cea44d0c~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/gpt-4-based",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66442817a06feb10e97705e1_Image%201000x1000.webp",
      title: "0xDesigner",
      opensea:
        "https://opensea.io/assets/base/0xaf2f3ee4cce5ef34cdcbe2e286445eddbd6c98f9/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0xaf2f3ee4cce5ef34cdcbe2e286445eddbd6c98f9~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/looking-for-liquidity",
      img: "https://art.transientlabs.xyz/Base-Wheel/looking%20for%20liquidity%20by%20Desultor.gif",
      title: "Desultor",
      opensea:
        "https://opensea.io/assets/base/0x065b4b93b127f138a8f082dac4f144db2c804625/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0x065b4b93b127f138a8f082dac4f144db2c804625~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/based-ape",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66436d8cc9087d569b3e985f_Based%20Ape%20by%20Luis%20Simo.jpeg",
      title: "Luis Simo",
      opensea:
        "https://opensea.io/assets/base/0x2295235e6398d3d068a83da82c55115ea4d21b7c/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0x2295235e6398d3d068a83da82c55115ea4d21b7c~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/unfk",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66436d8bc87376af5c89ebb9_unfk%20by%20unfk.png",
      title: "UNFK",
      opensea:
        "https://opensea.io/assets/base/0x4b2199085a34ff673d9faf6e73bf3f9bd9d978df/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0x4b2199085a34ff673d9faf6e73bf3f9bd9d978df~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/unfk",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66436f886066690cfd15cc3c_CashGrabby787.jpg",
      title: "787",
      opensea:
        "https://opensea.io/assets/base/0xcbececcbf60e4e73334a09c61437e9282d26e61f/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0xcbececcbf60e4e73334a09c61437e9282d26e61f~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/gulpooor",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6644c868e34356a0a7bca510_TheGulpooorbyBaseGulp-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/The%20Gulpooor%20by%20Base%20Gulp.mp4",
      title: "BASE GULP",
      opensea:
        "https://opensea.io/assets/base/0xe310cf13564577baa56519700204c580a90909aa/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0xe310cf13564577baa56519700204c580a90909aa~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/y33t",
      poster:
        "https://assets-global.website-files.com/663b0e68b97cc609cd859232/6644c868e34356a0a7bca510_TheGulpooorbyBaseGulp-poster.jpg",
      video:
        "https://art.transientlabs.xyz/Base-Wheel/Phat%20Y33t%20by%20Waambat.mp4",
      title: "Waambat",
      opensea:
        "https://opensea.io/assets/base/0x8030543b4e9da7bcb8a9903fea9167b0691036e0/1",
      magiceden:
        "https://magiceden.io/me?chain=base&evmItemDetailsModal=8453~0x8030543b4e9da7bcb8a9903fea9167b0691036e0~1",
    },
    {
      href: "https://launchpad.transientlabs.xyz/stacks/serial-rugger",
      img: "https://assets-global.website-files.com/663b0e68b97cc609cd859232/66436d8bb196498152f7ccaa_Serial%20Rugger%20by%20Oak.jpeg",
      title: "Oak",
      opensea:
        "https://opensea.io/assets/base/0xe224d0d4fb38946e5e28dc9dd1fc19306cb8c57e/1",
      magiceden:
        "https://magiceden.io/me?evmItemDetailsModal=8453~0xe224d0d4fb38946e5e28dc9dd1fc19306cb8c57e~1",
    },
  ];
  return (
    <section id="art" className="p-[7vw] border-t border-neutral-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[7vw]">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <Link target="_blank" href={item.href}>
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[85vh] block object-cover rounded-[1.25rem]"
                />
              ) : (
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
              )}
            </Link>
            <h1 className="text-[2.5rem] pb-2 leading-none text-[--blue]">
              {item.title}
            </h1>
            <div className="flex flex-row items-center gap-4">
              <Link
                href={item.href}
                target="_blank"
                className="rounded-full p-4 bg-[--blue] text-white"
              >
                <div className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_856_321)">
                      <path
                        d="M9 0C4.0302 0 0 4.0302 0 9C0 13.9698 4.0302 18 9 18C13.9698 18 18 13.9698 18 9C18 4.0302 13.9716 0 9 0ZM4.4406 9.3024L4.4784 9.2412L6.8202 5.5782C6.8544 5.526 6.9354 5.5314 6.9606 5.589C7.3512 6.4656 7.6896 7.5564 7.5312 8.235C7.4646 8.514 7.2792 8.892 7.0704 9.2412C7.0434 9.2916 7.0146 9.342 6.9822 9.3906C6.9678 9.4122 6.9426 9.4248 6.9156 9.4248H4.509C4.4442 9.4248 4.4064 9.3546 4.4406 9.3024ZM14.8752 10.5624C14.8752 10.5966 14.8554 10.6254 14.8266 10.638C14.6448 10.7154 14.0238 11.0016 13.7664 11.3598C13.1076 12.276 12.6054 13.5864 11.4804 13.5864H6.7896C5.1264 13.5864 3.78 12.2346 3.78 10.566V10.512C3.78 10.4688 3.816 10.4328 3.861 10.4328H6.4746C6.5268 10.4328 6.5646 10.4796 6.561 10.5318C6.5412 10.701 6.5736 10.8756 6.6546 11.034C6.8094 11.349 7.1316 11.5452 7.479 11.5452H8.7732V10.5354H7.4934C7.4286 10.5354 7.389 10.4598 7.4268 10.4058C7.4412 10.3842 7.4556 10.3626 7.4736 10.3374C7.5942 10.1646 7.767 9.8982 7.9398 9.594C8.0568 9.3888 8.1702 9.1692 8.262 8.9496C8.28 8.91 8.2944 8.8686 8.3106 8.829C8.3358 8.7588 8.361 8.6922 8.379 8.6274C8.397 8.5716 8.4132 8.514 8.4276 8.46C8.4708 8.2728 8.4888 8.0748 8.4888 7.8696C8.4888 7.7886 8.4852 7.704 8.478 7.6248C8.4744 7.5366 8.4636 7.4484 8.4528 7.3602C8.4456 7.2828 8.4312 7.2054 8.4168 7.1262C8.397 7.0092 8.3718 6.8922 8.343 6.7752L8.3322 6.7302C8.3106 6.6492 8.2908 6.5736 8.2656 6.4926C8.1918 6.2406 8.109 5.994 8.019 5.7636C7.9866 5.6718 7.9506 5.5836 7.9128 5.4972C7.8588 5.364 7.803 5.2434 7.7526 5.13C7.7256 5.0778 7.704 5.031 7.6824 4.9824C7.6572 4.9284 7.632 4.8744 7.605 4.8222C7.587 4.7826 7.5654 4.7448 7.551 4.7088L7.3926 4.4172C7.371 4.3776 7.407 4.329 7.4502 4.3416L8.4402 4.6098H8.4438C8.4456 4.6098 8.4456 4.6098 8.4474 4.6098L8.577 4.6476L8.721 4.6872L8.7732 4.7016V4.1148C8.7732 3.8304 9 3.6 9.2826 3.6C9.423 3.6 9.5508 3.6576 9.6408 3.7512C9.7326 3.8448 9.7902 3.9726 9.7902 4.1148V4.9878L9.8964 5.0166C9.9036 5.0202 9.9126 5.0238 9.9198 5.0292C9.945 5.0472 9.9828 5.076 10.0296 5.112C10.0674 5.1408 10.107 5.1768 10.1538 5.2146C10.2492 5.292 10.3644 5.391 10.4886 5.5044C10.521 5.5332 10.5534 5.562 10.584 5.5926C10.7442 5.742 10.9242 5.9166 11.097 6.111C11.1456 6.1668 11.1924 6.2208 11.241 6.2802C11.2878 6.3396 11.34 6.3972 11.3832 6.4548C11.4426 6.5322 11.5038 6.6132 11.5596 6.6978C11.5848 6.7374 11.6154 6.7788 11.6388 6.8184C11.7108 6.9246 11.772 7.0344 11.8314 7.1442C11.8566 7.1946 11.8818 7.2504 11.9034 7.3044C11.97 7.452 12.0222 7.6014 12.0546 7.7526C12.0654 7.785 12.0726 7.8192 12.0762 7.8516V7.8588C12.087 7.902 12.0906 7.9488 12.0942 7.9974C12.1086 8.1504 12.1014 8.3052 12.069 8.46C12.0546 8.5248 12.0366 8.586 12.015 8.6526C11.9916 8.7156 11.97 8.7804 11.9412 8.8434C11.8854 8.9712 11.8206 9.1008 11.7432 9.2196C11.718 9.2646 11.6874 9.3114 11.6586 9.3564C11.6262 9.4032 11.592 9.4482 11.5632 9.4914C11.5218 9.5472 11.4786 9.6048 11.4336 9.657C11.394 9.711 11.3544 9.765 11.3094 9.8136C11.2482 9.8874 11.1888 9.9558 11.1258 10.0224C11.0898 10.0656 11.0502 10.1106 11.0088 10.1502C10.9692 10.1952 10.9278 10.2348 10.8918 10.2708C10.8288 10.3338 10.7784 10.3806 10.7352 10.422L10.6326 10.5138C10.6182 10.5282 10.5984 10.5354 10.5786 10.5354H9.7902V11.5452H10.782C11.0034 11.5452 11.214 11.4678 11.385 11.322C11.4426 11.2716 11.6964 11.052 11.997 10.7208C12.0078 10.7082 12.0204 10.701 12.0348 10.6974L14.7726 9.9054C14.8248 9.891 14.8752 9.9288 14.8752 9.9828V10.5624Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_856_321">
                        <rect width="18" height="18" fill="currentColor"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Link>
              <Link
                href={item.href}
                target="_blank"
                className="rounded-full p-4 bg-[--blue] text-white"
              >
                <div className="h-6 w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M14.1705 3.05546L15.342 4.43052C15.4759 4.58518 15.5952 4.71193 15.6429 4.78403C15.9932 5.13172 16.1899 5.60209 16.1893 6.09165C16.1562 6.66958 15.7796 7.0632 15.4305 7.48415L14.6111 8.44583L14.1833 8.94411C14.1682 8.96097 14.1583 8.98248 14.1548 9.00516C14.1519 9.02783 14.1548 9.05109 14.1653 9.07144C14.1752 9.09237 14.1909 9.10923 14.2113 9.12144C14.2311 9.13307 14.2543 9.13947 14.277 9.1383H18.5503C19.2033 9.1383 20.0256 9.686 19.9773 10.5186C19.9761 10.8965 19.8225 11.2588 19.5513 11.5262C19.2795 11.7937 18.9117 11.9442 18.5276 11.9454H11.8357C11.3952 11.9454 10.2115 11.9931 9.8798 10.9837C9.80939 10.7727 9.79949 10.5471 9.85187 10.3308C9.94789 10.0116 10.1004 9.71159 10.3023 9.44413C10.6387 8.94585 11.003 8.44757 11.3626 7.96441C11.8258 7.33182 12.3013 6.719 12.7692 6.07362C12.7861 6.05269 12.7948 6.02653 12.7948 6.00036C12.7948 5.9742 12.7861 5.94803 12.7692 5.9271L11.0693 3.93399C11.0583 3.91945 11.0437 3.90782 11.0274 3.89968C11.0111 3.89154 10.9931 3.88747 10.9745 3.88747C10.9558 3.88747 10.9378 3.89154 10.9215 3.89968C10.9052 3.90782 10.8907 3.91945 10.8796 3.93399C10.4245 4.53925 8.43074 7.21961 8.00533 7.76266C7.58051 8.3057 6.53299 8.33536 5.95337 7.76266L3.29443 5.13462C3.27755 5.11776 3.25602 5.10613 3.23216 5.10148C3.2083 5.09683 3.18386 5.09916 3.16175 5.10846C3.13963 5.11776 3.12043 5.13288 3.10704 5.15265C3.09366 5.17242 3.08667 5.19567 3.08667 5.21951V10.2738C3.09308 10.6326 2.98483 10.9843 2.77824 11.2791C2.57165 11.5745 2.27601 11.7983 1.93324 11.9204C1.71443 11.9954 1.4799 12.0181 1.25062 11.9855C1.02074 11.9536 0.802512 11.8681 0.613378 11.7355C0.424243 11.6035 0.270026 11.4285 0.162947 11.2262C0.0564493 11.0233 0.000581952 10.7983 0 10.5703V1.48329C0.0151308 1.15595 0.135013 0.841397 0.342188 0.584408C0.549363 0.328001 0.833355 0.142527 1.15343 0.053569C1.42811 -0.0185274 1.71792 -0.017946 1.9926 0.0558947C2.26729 0.129154 2.51694 0.272765 2.71713 0.472194L6.80593 4.50262C6.81815 4.51483 6.8327 4.52413 6.84958 4.52994C6.86587 4.53576 6.88333 4.53808 6.90079 4.53692C6.91825 4.53576 6.93512 4.53053 6.95025 4.5218C6.96538 4.51308 6.97819 4.50145 6.98866 4.4875L9.8926 0.529173C10.027 0.3687 10.1952 0.238462 10.3855 0.148922C10.5758 0.0588018 10.7842 0.0111251 10.9954 0.00879945H18.5503C18.7569 0.00879945 18.9612 0.0529876 19.1497 0.137294C19.3377 0.2216 19.5059 0.344862 19.6415 0.497776C19.7776 0.651272 19.8789 0.830931 19.9383 1.02629C19.9982 1.22107 20.0145 1.42631 19.9871 1.62806C19.9342 1.97808 19.7538 2.29728 19.4797 2.52636C19.2056 2.75544 18.8564 2.8787 18.4973 2.87347H14.2671C14.2456 2.87347 14.2252 2.87987 14.2072 2.89091C14.1892 2.90196 14.1746 2.91766 14.1647 2.93626C14.1548 2.95487 14.1502 2.9758 14.1513 2.99673C14.1525 3.01766 14.1595 3.03801 14.1711 3.05546"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mints;
