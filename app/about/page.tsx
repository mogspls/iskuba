"use client";

import Header from "@/components/layout/Header";
import Iskuba from "@/components/layout/Iskuba";
import { useMemo, useState } from "react";

type FacilityMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

// const facilityMedia: FacilityMediaItem[] = [
//   {
//     type: "image",
//     src: "/images/facility/shack-hideaway-1.jpg",
//     alt: "The Shack Hideaway exterior",
//   },
//   {
//     type: "image",
//     src: "/images/facility/shack-hideaway-2.jpg",
//     alt: "The Shack Hideaway rooms",
//   },
//   {
//     type: "image",
//     src: "/images/facility/shack-hideaway-3.jpg",
//     alt: "The Shack Hideaway restaurant",
//   },
//   {
//     type: "image",
//     src: "/images/facility/shack-hideaway-4.jpg",
//     alt: "The Shack Hideaway pool",
//   },
//   {
//     type: "video",
//     src: "/videos/facility/shack-hideaway-tour.mp4",
//     alt: "The Shack Hideaway resort video tour",
//     poster: "/images/facility/shack-hideaway-video-poster.jpg",
//   },
// ];

const images = [
  "IMG_5014.jpg",
  "IMG_5093.jpg",
  "IMG_5094.jpg",
  "IMG_5095.jpg",
  "IMG_5096.jpg",
  "IMG_5110.jpg",
  "IMG_5111.jpg",
  "IMG_5112.jpg",
  "IMG_5113.jpg",
  "IMG_5114.jpg",
  "IMG_5115.jpg",
  "IMG_5116.jpg",
  "IMG_5117.jpg",
  "IMG_5118.jpg",
  "IMG_5119.jpg",
  "IMG_5120.jpg",
  "IMG_5121.jpg",
  "IMG_5122.jpg",
  "IMG_5123.jpg",
  "IMG_5124.jpg",
  "IMG_5125.jpg",
  "IMG_5126.jpg",
  "IMG_5127.jpg",
  "IMG_5128.jpg",
  "IMG_5129.jpg",
  "IMG_5131.jpg",
  "IMG_5132.jpg",
  "IMG_5133.jpg",
  "IMG_5134.jpg",
  "IMG_5136.jpg",
  "IMG_5137.jpg",
  "IMG_5138.jpg",
  "IMG_5139.jpg",
  "IMG_5140.jpg",
  "IMG_5141.jpg",
  "IMG_5143.jpg",
  "IMG_5144.jpg",
  "IMG_5145.jpg",
  "IMG_5146.jpg",
  "IMG_5147.jpg",
  "IMG_5148.jpg",
  "IMG_5149.jpg",
  "IMG_5150.jpg",
  "IMG_5204.jpg",
  "IMG_5206.jpg",
  "IMG_5207.jpg",
  "IMG_5210.jpg",
  "IMG_5211.jpg",
  "IMG_5239.jpg",
  "dessert_turon(1).jpg",
  "dessert_turon(2).jpg",
  "dessert_turon(3).jpg",
  "dessert_turon(4).jpg",
  "dessert_turon.jpg",
  "dish_burrito(1).jpg",
  "dish_burrito(2).jpg",
  "dish_burrito.jpg",
  "dish_quesadilla(1).jpg",
  "dish_quesadilla(2).jpg",
  "dish_quesadilla.jpg",
  "dish_sinigang(1).jpg",
  "dish_sinigang(2).jpg",
  "dish_sinigang.jpg",
  "meal_longganisa.jpg",
  "meal_ribs(1).jpg",
  "view_dining(2).jpg",
  "view_dining.jpg"
];

const facilityMedia: FacilityMediaItem[] = images.map((img) => ({
  type: "image",
  src: `/images/facility/${img}`,
  alt: `The Shack Hideaway - ${img.split(".")[0].replace(/_/g, " ")}`,
}));

export default function About() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentMedia = useMemo(
    () => facilityMedia[currentSlide],
    [currentSlide],
  );

  const lightboxMedia =
    lightboxIndex !== null ? facilityMedia[lightboxIndex] : null;

  const goPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? facilityMedia.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setCurrentSlide((prev) =>
      prev === facilityMedia.length - 1 ? 0 : prev + 1,
    );
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goPrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? facilityMedia.length - 1 : lightboxIndex - 1,
    );
  };

  const goNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === facilityMedia.length - 1 ? 0 : lightboxIndex + 1,
    );
  };

  return (
    <>
      <Header />
      <Iskuba />
      <main className="min-h-screen h-full w-full">
        <section id="about" className="bg-foregound/10 h-full">
          <div className="max-w-screen-xl mx-auto w-full py-12 px-4">
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
              <div className="py-4 [&>p]:py-2 md:[&>p]:text-xl flex-1">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  ABOUT US
                </h5>
                <h2 className="font-black text-2xl md:text-4xl">
                  Built on trust. Backed by experience. Inspired by every new
                  diver.
                </h2>
                <div className="flex flex-col gap-4 py-4">
                  <p>
                    Welcome to iSkuba Diving Center, proudly based at Mayumi
                    Resort, where crystal-clear waters and years of shared
                    experience come together to create something truly personal.
                  </p>
                  <p>
                    This center is the result of a deep commitment to diving and
                    mentorship, to build a space where divers could grow with
                    purpose along their journey. At our core, we believe diving
                    should be taught with care, discipline, and respect.
                  </p>
                  <p>
                    We don’t rush certifications. We don’t cut corners. What we
                    offer is time, attention, and a training experience designed
                    to make every diver confident, capable, and ready for
                    real-world diving.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="/images/about%20us.webp"
                  alt="About Us"
                  className="aspect-[4/3] object-center object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground/10">
          <div className="max-w-screen-xl mx-auto w-full py-12 px-4">
            <div className="flex flex-col-reverse md:flex-row-reverse gap-12 items-center">
              <div className="py-4 [&>p]:py-2 md:[&>p]:text-xl">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  INTRODUCTION
                </h5>
                <h2 className="font-black text-2xl md:text-4xl">
                  Meet Ivan, Our Course Director
                </h2>
                <div className="flex flex-col gap-4 py-4">
                  <p>
                    As a PADI Course Director, Ivan has certified over 500
                    recreational divers and mentored many aspiring instructors.
                    He has taught nationwide in the Philippines, dived across
                    Asia, and even joined an underwater archaeological dig.
                  </p>
                  <p>
                    He has earned a reputation among his students for being a
                    firm but fair instructor. His guiding principle is best
                    captured in his own words: “I measure success by how far my
                    students can go beyond me.”
                  </p>
                  <p>
                    If you’re ready to start your dive journey, or take the next
                    step in it, you’ll find a home here.
                  </p>
                  <p>Learn. Live. Teach with iSkuba.</p>
                </div>
              </div>
              <div className="flex">
                <img
                  src="/images/meet-ivan.jpg"
                  alt="Meet Ivan"
                  className="aspect-square object-top object-center object-cover h-56 rounded-full md:h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto w-full py-12 px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  OUR FACILITY
                </h5>
                <h2 className="font-black text-2xl md:text-4xl">
                  The Shack Hideaway by Mayumi Resort
                </h2>
                <div className="flex flex-col gap-4 py-4 md:text-xl">
                  <p>
                    Located in the heart of Mabini, Batangas, you can find us at
                    The Shack Hideaway by Mayumi Resort. Aside from complete
                    sets of recreational scuba diving equipment, we have a
                    training pool that can handle multiple diving classes.
                  </p>

                  <p>
                    The Shack Hideaway has friendly staff, dorm rooms, deluxe
                    rooms, villas, and a full restaurant with a TexMex menu that
                    can cater to your food cravings.
                  </p>

                  <p className="font-semibold">
                    The Shack Hideaway by Mayumi Resort
                  </p>

                  <div className="flex flex-col gap-1">
                    <p className="font-semibold">For bookings:</p>
                    <p>Ernest de Jesus</p>
                    <a
                      href="tel:+639178452383"
                      className="underline underline-offset-4"
                    >
                      +63917 8452383
                    </a>
                    <a
                      href="https://www.facebook.com/mayumi.resorts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 break-all"
                    >
                      https://www.facebook.com/mayumi.resorts
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:max-w-2xl">
                <div className="relative overflow-hidden rounded-2xl bg-black">
                  <button
                    type="button"
                    onClick={() => openLightbox(currentSlide)}
                    className="block w-full text-left"
                  >
                    {currentMedia.type === "image" ? (
                      <img
                        src={currentMedia.src}
                        alt={currentMedia.alt}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    ) : (
                      <video
                        src={currentMedia.src}
                        poster={currentMedia.poster}
                        className="w-full aspect-[4/3] object-cover"
                        muted
                        playsInline
                      />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center"
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>

                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                  {facilityMedia.map((item, index) => (
                    <button
                      key={`${item.src}-${index}`}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`relative shrink-0 rounded-xl overflow-hidden border ${
                        currentSlide === index
                          ? "border-black"
                          : "border-black/10"
                      }`}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-24 h-24 object-cover"
                        />
                      ) : (
                        <div className="relative">
                          <video
                            src={item.src}
                            poster={item.poster}
                            className="w-24 h-24 object-cover"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xs font-bold">
                            VIDEO
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-us"
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('images/bg.jpg')",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full py-12 p-4 h-full flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex items-start flex-col gap-4 flex-1">
              <div className="bg-white rounded-2xl py-2 px-3 text-xs">
                Reach out to us
              </div>
              <h1 className="text-white font-bold text-center text-4xl text-left">
                Send us a Message.
              </h1>
              <div className="text-xl text-white">
                <p>Or just reach out manually to </p>
                <a
                  href="mailto:dive@iskuba.com"
                  className="text-white hover:underline"
                >
                  dive@iskuba.com
                </a>
              </div>
              <div className="max-w-sm flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://maps.app.goo.gl/4sAtYRqXnmahA15SA"
                  target="_blank"
                  className="text-white underline"
                >
                  Iskuba Diving Center, Mayumi Resort Brgy Bagalangit, Anilao,
                  Mabini, 1550 Batangas, Philippines
                </a>
              </div>
            </div>
            <div className="bg-white/50 h-full rounded-xl p-2 flex-1 max-w-full md:max-w-sm">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="viber://chat/?number=%2B639178214826"
                  className="rounded-sm flex flex-col justify-center gap-4 bg-[#7360f2] p-3 w-full"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      className="h-6 w-6 sm:h-9 sm:w-8"
                      viewBox="0 0 506 534"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M448.708 52.0204C435.455 39.7913 381.897 0.911035 262.599 0.382814C262.599 0.382814 121.916 -8.10073 53.3353 54.8056C15.1593 92.9895 1.72969 148.861 0.313099 218.13C-1.10349 287.399 -2.93626 417.213 122.196 452.412H122.316L122.236 506.122C122.236 506.122 121.436 527.867 135.754 532.301C153.073 537.679 163.237 521.153 179.772 503.337C188.848 493.557 201.381 479.191 210.825 468.21C296.405 475.413 362.224 458.951 369.699 456.518C386.979 450.915 484.756 438.39 500.658 308.584C517.073 174.792 492.719 90.1643 448.708 52.0204Z"
                        fill="white"
                      />
                      <path
                        d="M420.881 79.0477C409.676 68.8675 361.312 38.4788 260.398 38.0386C260.398 38.0386 140.9 30.1873 82.8916 82.7293C50.6061 114.607 39.7296 162.01 38.5371 219.859C37.3446 277.707 31.166 388.217 136.978 417.613C136.978 417.613 136.562 499.656 136.514 506.867C136.514 511.909 137.314 515.358 140.196 516.07C142.268 516.575 145.374 515.502 148.015 512.869C164.934 495.878 219.101 430.531 219.101 430.531C291.779 435.277 349.603 420.927 355.822 418.894C370.484 414.18 449.789 407.369 463.211 298.956C477.08 187.205 458.112 110.925 420.881 79.0477Z"
                        fill="#7360F2"
                      />
                      <path
                        d="M311.707 215.105C310.395 188.646 296.954 174.749 271.386 173.415"
                        stroke="white"
                        strokeWidth="13.4936"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M346.322 226.709C346.855 202.059 339.554 181.464 324.417 164.924C309.21 148.325 288.161 139.185 261.15 137.208"
                        stroke="white"
                        strokeWidth="13.4936"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M381.761 240.571C381.435 197.796 368.654 164.107 343.417 139.505C318.179 114.903 286.793 102.471 249.257 102.209"
                        stroke="white"
                        strokeWidth="13.4936"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M272.723 305.47C272.723 305.47 282.207 306.271 287.313 299.98L297.269 287.455C302.071 281.244 313.66 277.283 325.009 283.605C333.513 288.455 341.77 293.728 349.747 299.404C357.278 304.942 372.701 317.811 372.749 317.811C380.096 324.014 381.793 333.122 376.79 342.726C376.79 342.782 376.75 342.878 376.75 342.926C371.241 352.476 364.247 361.089 356.03 368.441C355.934 368.489 355.934 368.537 355.846 368.585C348.707 374.55 341.693 377.941 334.805 378.757C333.791 378.934 332.76 378.999 331.732 378.949C328.694 378.978 325.672 378.513 322.784 377.572L322.56 377.244C311.947 374.251 294.228 366.76 264.72 350.481C247.644 341.172 231.387 330.433 216.123 318.38C208.473 312.342 201.175 305.87 194.266 298.996L193.53 298.259L192.794 297.523L192.057 296.787C191.809 296.547 191.569 296.298 191.321 296.05C184.447 289.141 177.975 281.844 171.937 274.193C159.885 258.931 149.147 242.677 139.835 225.605C123.557 196.089 116.065 178.385 113.072 167.757L112.744 167.533C111.806 164.644 111.344 161.622 111.376 158.585C111.32 157.557 111.381 156.526 111.56 155.512C112.419 148.634 115.815 141.615 121.748 134.455C121.796 134.367 121.844 134.367 121.892 134.271C129.241 126.054 137.854 119.062 147.407 113.558C147.455 113.558 147.551 113.51 147.607 113.51C157.211 108.508 166.318 110.205 172.513 117.512C172.561 117.56 185.406 132.982 190.921 140.513C196.597 148.499 201.87 156.763 206.719 165.276C213.042 176.616 209.08 188.229 202.87 193.015L190.345 202.971C184.022 208.078 184.854 217.562 184.854 217.562C184.854 217.562 203.406 287.775 272.723 305.47Z"
                        fill="white"
                      />
                    </svg>
                    <h1 className="text-white font-bold text-xs sm:text-sm md:text-base">
                      Viber
                    </h1>
                  </div>
                </a>
                <a
                  href="https://t.me/ivanarcosis"
                  className="rounded-sm flex flex-col gap-4 bg-white p-2 w-full"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      className="h-6 w-6 sm:h-9 sm:w-8"
                      viewBox="0 0 241 241"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_23_18)">
                        <path
                          d="M120.1 240.2C186.429 240.2 240.2 186.429 240.2 120.1C240.2 53.7706 186.429 0 120.1 0C53.7706 0 0 53.7706 0 120.1C0 186.429 53.7706 240.2 120.1 240.2Z"
                          fill="url(#paint0_linear_23_18)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M54.3 118.8C89.3 103.6 112.6 93.5 124.3 88.6C157.6 74.7 164.6 72.3 169.1 72.2C170.1 72.2 172.3 72.4 173.8 73.6C175 74.6 175.3 75.9 175.5 76.9C175.7 77.9 175.9 80 175.7 81.6C173.9 100.6 166.1 146.7 162.1 167.9C160.4 176.9 157.1 179.9 153.9 180.2C146.9 180.8 141.6 175.6 134.9 171.2C124.3 164.3 118.4 160 108.1 153.2C96.2 145.4 103.9 141.1 110.7 134.1C112.5 132.3 143.2 104.3 143.8 101.8C143.9 101.5 143.9 100.3 143.2 99.7C142.5 99.1 141.5 99.3 140.7 99.5C139.6 99.7 122.8 110.9 90.1 133C85.3 136.3 81 137.9 77.1 137.8C72.8 137.7 64.6 135.4 58.4 133.4C50.9 131 44.9 129.7 45.4 125.5C45.7 123.3 48.7 121.1 54.3 118.8Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_23_18"
                          x1="120"
                          y1="0"
                          x2="120"
                          y2="238.3"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2AABEE" />
                          <stop offset="1" stopColor="#229ED9" />
                        </linearGradient>
                        <clipPath id="clip0_23_18">
                          <rect width="240.1" height="240.1" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h1 className="text-black font-bold text-xs sm:text-sm md:text-base">
                      Telegram
                    </h1>
                  </div>
                </a>
                <a
                  href="https://wa.me/639178214826"
                  className="rounded-sm flex flex-col justify-center gap-4 bg-[#25d366] p-2 w-full"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_35_5898)">
                        <path
                          d="M36.864 17.7659C36.6905 13.0141 34.688 8.51307 31.2747 5.20259C27.8614 1.89212 23.3013 0.0281839 18.5464 5.08648e-06H18.4566C15.2546 -0.0023727 12.1071 0.828951 9.32389 2.41218C6.54066 3.9954 4.21759 6.27598 2.58326 9.0295C0.948918 11.783 0.0596307 14.9146 0.00289589 18.1161C-0.0538389 21.3176 0.723934 24.4788 2.25968 27.2885L0.628958 37.0467C0.626302 37.0667 0.62794 37.087 0.633764 37.1064C0.639587 37.1257 0.649464 37.1436 0.662734 37.1588C0.676005 37.174 0.692365 37.1862 0.710726 37.1946C0.729086 37.203 0.749026 37.2074 0.769216 37.2075H0.797267L10.4488 35.0606C12.9425 36.2579 15.6735 36.8791 18.4398 36.8783C18.6156 36.8783 18.7914 36.8783 18.9671 36.8783C21.4005 36.8089 23.796 36.2582 26.0154 35.2581C28.2347 34.258 30.2341 32.8282 31.898 31.0513C33.5619 29.2744 34.8574 27.1855 35.7097 24.9053C36.5621 22.6251 36.9544 20.1986 36.864 17.7659ZM18.8755 33.6711C18.7296 33.6711 18.5838 33.6711 18.4398 33.6711C15.9949 33.6742 13.5852 33.0892 11.4138 31.9656L10.9201 31.7075L4.37477 33.2541L5.58285 26.6321L5.30233 26.1571C3.96255 23.8728 3.24091 21.2789 3.20847 18.631C3.17604 15.983 3.83393 13.3722 5.11736 11.0558C6.40078 8.73942 8.26547 6.79729 10.5278 5.42073C12.79 4.04416 15.3719 3.28063 18.019 3.20535C18.1661 3.20535 18.3139 3.20535 18.4622 3.20535C22.4589 3.2172 26.2909 4.79863 29.1327 7.6089C31.9745 10.4192 33.5986 14.2334 33.655 18.2296C33.7114 22.2259 32.1956 26.0844 29.4343 28.9738C26.673 31.8631 22.8871 33.5521 18.8923 33.6767L18.8755 33.6711Z"
                          fill="white"
                        />
                        <path
                          d="M12.0314 9.53784C11.8036 9.54228 11.5789 9.59241 11.3708 9.68524C11.1626 9.77807 10.9752 9.91173 10.8196 10.0783C10.3802 10.529 9.1515 11.6136 9.08043 13.8914C9.00937 16.1692 10.6008 18.4227 10.8234 18.7387C11.0459 19.0548 13.866 23.975 18.5113 25.9704C21.2417 27.1467 22.4385 27.3487 23.2146 27.3487C23.5344 27.3487 23.7757 27.315 24.0281 27.3C24.879 27.2477 26.7996 26.264 27.2185 25.1943C27.6374 24.1246 27.6655 23.1896 27.5551 23.0025C27.4448 22.8155 27.1418 22.6809 26.6855 22.4415C26.2292 22.2021 23.9907 21.0053 23.57 20.837C23.4139 20.7643 23.246 20.7206 23.0744 20.7079C22.9626 20.7138 22.8539 20.7468 22.7578 20.8042C22.6616 20.8615 22.581 20.9415 22.5227 21.0371C22.1487 21.5027 21.2903 22.5144 21.0023 22.8062C20.9394 22.8787 20.8619 22.9371 20.7749 22.9777C20.6879 23.0183 20.5934 23.0401 20.4974 23.0418C20.3205 23.0341 20.1475 22.9875 19.9906 22.9053C18.6346 22.3294 17.3984 21.5049 16.3458 20.4742C15.3622 19.5048 14.5278 18.395 13.8698 17.1809C13.6154 16.7097 13.8698 16.4666 14.1016 16.2459C14.3335 16.0252 14.5823 15.7204 14.8216 15.4567C15.0181 15.2314 15.1818 14.9796 15.3079 14.7087C15.3731 14.5829 15.4061 14.4429 15.4038 14.3012C15.4015 14.1595 15.3641 14.0206 15.2948 13.897C15.1844 13.6614 14.3597 11.3444 13.9726 10.4149C13.6584 9.62012 13.2844 9.59394 12.9571 9.56963C12.6879 9.55093 12.3793 9.54158 12.0707 9.53223H12.0314"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_35_5898">
                          <rect width="160.0" height="37.2075" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <h1 className="text-white font-bold text-xs sm:text-sm md:text-base">
                      WhatsApp
                    </h1>
                  </div>
                </a>
                <a
                  href="sms:/639178214826"
                  className="rounded-sm flex flex-col justify-center gap-4 bg-black p-2 w-full"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="h-6 w-6 md:h-8 md:w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <h1 className="text-white font-bold text-xs sm:text-sm md:text-base">
                      SMS
                    </h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {lightboxMedia && (
        <div className="fixed inset-0 z-[200] bg-black/90 p-4 md:p-8 flex items-center justify-center">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            aria-label="Close lightbox"
          >
            ×
          </button>

          <button
            type="button"
            onClick={goPrevLightbox}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-4xl"
            aria-label="Previous media"
          >
            ‹
          </button>

          <div className="w-full max-w-6xl">
            {lightboxMedia.type === "image" ? (
              <img
                src={lightboxMedia.src}
                alt={lightboxMedia.alt}
                className="w-full max-h-[85vh] object-contain mx-auto"
              />
            ) : (
              <video
                src={lightboxMedia.src}
                poster={lightboxMedia.poster}
                controls
                autoPlay
                className="w-full max-h-[85vh] object-contain mx-auto"
              />
            )}
          </div>

          <button
            type="button"
            onClick={goNextLightbox}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-4xl"
            aria-label="Next media"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
