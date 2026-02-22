"use client";
import Head from "next/head";
import React, { useMemo } from "react";
import Courses from "@/components/layout/Courses";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Iskuba from "@/components/layout/Iskuba";
import Header from "@/components/layout/Header";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Slide = {
  strapline: string;
  title: string;
  path: string;
  poster: string;
  video?: string[]; // [desktop, mobile]
};

function pickVideoSrc(video: Slide["video"], isDesktop: boolean) {
  if (!video || video.length === 0) return null;
  if (video.length === 1) return video[0];
  // video[0] = desktop, video[1] = mobile
  return isDesktop ? video[0] : video[1] ?? video[0];
}

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const mockup = useMemo<Slide[]>(
    () => [
      {
        strapline: "LEISURE DIVES",
        title: "Explore with confidence. Dive with purpose.",
        path: "/leisure-dives",
        poster: "/images/leisure-dives.jpg",
        video: ["/videos/Victor%20Cathedral.mp4"], // only 1 source
      },
      {
        strapline: "ABOUT US",
        title: "Built on trust. Backed by experience. Inspired by every new diver.",
        path: "/about",
        poster: "/images/about.jpg",
        video: ["/videos/Clownfish Hangout.webm"], // only 1 source
      },
      {
        strapline: "EXPERIENCE PROGRAM",
        title: "Curious? Start here.",
        path: "/courses#experience-programs",
        poster: "/images/experience-programs.jpg",
        video: ["/videos/player_export.mp4"],
      },
      {
        strapline: "PRO-LEVEL INTERNSHIP",
        title: "Become the diver others look up to.",
        path: "/courses#pro-level-internship",
        poster: "/images/pro-level-internship.jpg",
        // desktop first, mobile second
        video: ["/videos/Pro-Level-Internship.mp4", "/videos/PRO_LEVEL_INTERNSHIP.mp4"],
      },
      {
        strapline: "PRO-LEVEL TRAINING",
        title: "Lead. Mentor. Make a difference underwater",
        path: "/courses#pro-level-training",
        poster: "/images/pro-level-training.jpg",
        video: ["/videos/Pro-Level-Training.mp4", "/videos/PRO_LEVEL_TRAINING.mp4"],
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>ISKUBA &mdash; Home</title>
      </Head>

      <Iskuba />
      <Header />

      <main className="h-full min-h-screen overflow-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        >
          <CarouselContent className="px-6 py-4">
            {mockup.map((slide, i) => {
              const videoSrc = pickVideoSrc(slide.video, isDesktop);

              return (
                <CarouselItem
                  key={i}
                  className="flex items-center justify-center text-2xl basis-10/12 p-2 relative"
                >
                  <div
                    className="aspect-[12/16] md:aspect-[16/7] border w-full rounded-xl relative flex flex-col gap-4 overflow-hidden justify-end"
                    style={{
                      // keep poster as a safe fallback even if video exists
                      backgroundImage: `url(${slide.poster})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {videoSrc && (
                      <video
                        key={videoSrc} // ✅ forces reload when switching desktop/mobile src
                        src={videoSrc} // ✅ simplest way for single chosen source
                        className="absolute z-10 top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-center object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={slide.poster}
                      />
                    )}

                    <div className="relative z-10 p-4 md:p-6 bg-gradient-to-b from-transparent from-0% to-black to-75% w-full">
                      <div className="max-w-md flex flex-col gap-2">
                        <h5 className="text-white/50 font-black text-xs md:text-sm">
                          {slide.strapline}
                        </h5>
                        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
                          {slide.title}
                        </h1>
                        <div className="relative z-10">
                          <Link
                            href={slide.path}
                            className="bg-white text-black font-semibold border rounded-full text-sm px-4 py-2 inline-block"
                          >
                            LEARN MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="max-w-screen-xl justify-center lg:justify-start p-2 pb-6 mx-auto w-full flex items-center gap-4">
            <CarouselPrevious />
            <CarouselDots />
            <CarouselNext />
          </div>
        </Carousel>

        {/* Courses Offered */}
        <section id="courses" className="border-t">
          <div className="relative max-w-screen-xl mx-auto w-full flex gap-4 md:gap-12 py-6 sm:pt-12">
            <div className="flex gap-4 flex-col w-full px-2">
              <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                COURSES OFFERED
              </h5>
              <h2 className="font-black text-2xl md:text-4xl">ISKUBA</h2>
              <p className="pb-4 text-sm md:text-xl">
                When you train with us, you&apos;re not just checking a box—you&apos;re
                gaining real skills, real confidence, and a mentor invested in your growth...
              </p>
            </div>
          </div>
        </section>

        <Courses />

        <section id="leisure-dives" className="border-t border-black/25">
          <div className="relative max-w-screen-xl mx-auto w-full flex gap-8 md:gap-12 py-12 px-2">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex gap-4 flex-col w-full flex-1">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  LEISURE DIVES
                </h5>
                <h2 className="font-black text-2xl md:text-4xl">
                  Explore with Confidence. Dive With Professionals
                </h2>
                <p className="pb-4 text-sm md:text-xl">
                  Our fun dives are more than just a splash in the water—they’re guided
                  experiences led by real dive professionals...
                </p>
              </div>
              <div className="flex-1">
                {/* eslint-disable-next-line */}
                <img
                  src="/images/leisure-dives.jpg"
                  alt="Leisure Dives at ISKUBA Philippines"
                  className="rounded-xl border"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}