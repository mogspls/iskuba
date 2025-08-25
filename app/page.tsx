import Head from "next/head";
import Courses from "@/components/Courses";
import CoursesOfferedSVG from "@/components/CoursesOfferedSVG";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export default function Home() {

  const mockup = [
    {strapline: "ABOUT US", title: "Built on trust. Backed by experience. Inspired by every new diver.", buttonText: "LEARN MORE", path: "/about-us"},
    {strapline: "EXPERIENCE PROGRAM", title: "Curious? Start here.", buttonText: "LEARN MORE", path: "/experience-programs"},
    {strapline: "CERTIFICATION COURSES", title: "Your path to becoming a real diver&mdash;done right.", buttonText: "LEARN MORE", path: "/certification-courses"},
    {strapline: "PRO-LEVEL TRAINING", title: "Lead. Mentor. Make a difference underwater", buttonText: "LEARN MORE", path: "/pro-level-training"},
  ]

  return (
    <>
      <Head>
        <title>ISKUBA &mdash; Home</title>
      </Head>
      <main className="h-full min-h-screen overflow-hidden md pb-24">
        <Carousel>
          <CarouselContent className="px-6 py-4">
            {mockup.map((slide, i) => {
              return (
                <CarouselItem
                  key={i}
                  className={`flex items-center justify-center text-2xl basis-10/12 p-2`}
                >
                  <div className=" aspect-[16/7] flex items-center justify-center border w-full rounded-xl">
                    {slide.title}
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
          <div className="relative max-w-screen-xl mx-auto w-full flex gap-12 pt-12 ">
            {/* Rotated label at bottom-left */}
            <CoursesOfferedSVG/>
            <div className="h-60 w-8" />
            {/* Main content shifted right so it clears the label */}
            <div className="flex gap-4 flex-col w-full">
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
      </main>
    </>
  );
}
