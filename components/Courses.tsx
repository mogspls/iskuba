"use client";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Courses() {

  const courses = [
    {
      title: "Experience Programs",
      description:
        "These no-commitment, low-pressure programs are perfect for trying the water before diving all the way in.",
      cta: "/experience-programs",
      bannerImage: '/\images/\experience-programs.jpg'
    },
    {
      title: "Certification Courses",
      description:
        "We believe in building divers, not just certifying them. That means clear instruction, patient coaching, and high standards that give you true underwater confidence.",
      cta: "/certification-courses",
      bannerImage: '/\images/\certification-courses.png'
    },
    {
      title: "Pro-Level Training",
      description:
        "When you're ready to turn your passion into purpose, we'll guide you every step of the way with training that prepares you for the real world, not just the exam.",
      cta: "/pro-level-training",
      bannerImage: '/\images/\pro-level-training.jpg'
    },
    {
      title: "Pro-Level Internship",
      description:
        "Your first step to becoming the diver others look up to, whether you want to train to teach, learn the industry or build a career.",
      cta: "/pro-level-internship",
      bannerImage: '/\images/\pro-level-internship.jpg'
    },
  ];

  const isDesktop = useMediaQuery('(min-width: 40rem)');

  return (
    <section className="w-full border-y">
      <div className="max-w-screen-xl mx-auto w-full min-h-24 gap-x-2 gap-y-12 lg:gap-4 py-12 sm:px-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {isDesktop ? (
          courses.map((course, index) => {
            return (
              <div className="w-full flex flex-col justify-between gap-2" key={index}>
                <div>
                  <div className={`w-full aspect-video rounded-2xl bg-center bg-cover`} style={{ backgroundImage: `url(${course.bannerImage})`}}></div>
                  <div className="w-full">
                    <h2 className="text-sm sm:text-lg md:text-xl font-bold py-2">
                      {course.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-foreground/50 pb-4">
                      {course.description}
                    </p>
                  </div>
                </div>
                <Link
                  href={course.cta}
                  className="bg-foreground/10 text-center p-2 rounded-full font-bold text-xs w-full"
                >
                  LEARN MORE
                </Link>
              </div>
            );
          })
        ) : (
          <Carousel>
            <CarouselContent className="px-4 flex">
              {courses.map((course, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className={`flex flex-col text-2xl basis-10/12 p-2 justify-between gap-4`}
                  >
                    <div>
                      <div className={`w-full aspect-video rounded-2xl ${course.bannerImage ? `bg-[url(${course.bannerImage})]` : "bg-foreground/25"}`}></div>
                      <div className="w-full">
                        <h2 className="text-sm sm:text-lg md:text-xl font-bold py-2">
                          {course.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-foreground/50 pb-4">
                          {course.description}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={course.cta}
                      className="bg-foreground/10 text-center p-2 rounded-full font-bold text-xs w-full"
                    >
                      LEARN MORE
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        )}
      </div>
    </section>
  );
}