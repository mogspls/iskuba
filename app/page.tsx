"use client"
import Head from "next/head";
import Courses from "@/components/Courses";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"

export default function Home() {

  const mockup = [
    {
      strapline: "ABOUT US", 
      title: "Built on trust. Backed by experience. Inspired by every new diver.",
      path: "/about",
      poster: "/\images/\about.jpg",
      video: "/videos/Victor%20Cathedral.mp4"
    },
    {
      strapline: "LEISURE DIVES", 
      title: "Explore with confidence. Dive with purpose.",
      path: "/leisure-dives",
      poster: "/\images/\about.jpg"
    },
    {
      strapline: "EXPERIENCE PROGRAM", 
      title: "Curious? Start here.",
      path: "/experience-programs",
      poster: "/\images/\about.jpg",
    },
    {
      strapline: "PRO-LEVEL TRAINING", 
      title: "Lead. Mentor. Make a difference underwater",
      path: "/pro-level-training",
      poster: "/\images/\about.jpg",
    },
    {
      strapline: "PRO-LEVEL TRAINING", 
      title: "Lead. Mentor. Make a difference underwater",
      path: "/pro-level-training",
      poster: "/\images/\about.jpg",
    },
  ]

  return (
    <>
      <Head>
        <title>ISKUBA &mdash; Home</title>
      </Head>
      <main className="h-full min-h-screen overflow-hidden md pb-24">
        <Carousel opts={{loop: true}} plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}>
          <CarouselContent className="px-6 py-4">
            {mockup.map((slide, i) => {
              return (
              <CarouselItem
                key={i}
                className="flex items-center justify-center text-2xl basis-10/12 p-2 relative"
              >
                <div className={`aspect-[12/16] md:aspect-[16/7] border w-full rounded-xl relative flex flex-col gap-4 overflow-hidden justify-end `} style={{ backgroundImage: slide.video ? '' : `url(${slide.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  {/* Only show video if slide.video exists */}
                  {slide.video && (
                    <video
                      className="absolute z-10 top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-center object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={slide.poster}
                    >
                      <source src={slide.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}

                  {/* Content overlay */}
                  <div className="relative z-10 p-4 md:p-12 bg-gradient-to-b from-transparent from-0% to-black to-75% w-full">
                    <div className="max-w-md flex flex-col gap-4">
                      <h5 className="text-white/50 font-black text-xs md:text-sm">{slide.strapline}</h5>
                      <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold">{slide.title}</h1>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* Courses Offered */}
        <section id="courses" className="border-t border-b border-black/25">
          <div className="relative max-w-screen-xl mx-auto w-full flex gap-4 md:gap-12 pt-6 sm:pt-12">
            <div className="flex gap-4 flex-col w-full">
              <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">COURSES OFFERED</h5>
              <h2 className="font-black text-2xl md:text-4xl">ISKUBA</h2>
              <p className="pb-4 text-sm md:text-xl">
                When you train with us, you're not just checking a box—you're
                gaining real skills, real confidence, and a mentor invested in
                your growth. With over 20 years of experience and teaching style
                that's firm, focused, and deeply rewarding, we don't just get
                you certified—we make sure you're ready. Whether it's your first
                breath underwater or your first step toward becoming a dive
                professional, we'll meet you where you are—and challenge you to
                go further.
              </p>
            </div>
          </div>
        </section>
        <Courses/>
        <section id="leisure-dives" className="border-t border-b border-black/25">
          <div className="relative max-w-screen-xl mx-auto w-full flex gap-8 md:gap-12 pt-6 sm:pt-12">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              <div className="flex gap-4 flex-col w-full flex-1">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">LEISURE DIVES</h5>
                <h2 className="font-black text-2xl md:text-4xl">Explore with Confidence. Dive With Professionals</h2>
                <p className="pb-4 text-sm md:text-xl">
                  Our fun dives are more than just a splash in the water—they’re guided experiences led by real dive professionals who know the local sites, understand safety inside and out, and care about your comfort and enjoyment at every step.
                </p>
              </div>
              <div className="flex-1">
                <img src="/images/leisure-dives.jpg" alt="Leisure Dives at ISKUBA Philippines" className="rounded-xl border"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
