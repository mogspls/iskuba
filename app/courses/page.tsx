"use client";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Components
import CoursesBox from "@/components/CoursesBox";
import Header from "@/components/layout/Header";
import Iskuba from "@/components/layout/Iskuba";
import Autoplay from "embla-carousel-autoplay";

import { useContactModal } from "@/components/contact-modal";
import { title } from "process";

const experiencePrograms = [
  {
    name: "Bubblemaker",
    duration: "2 hours",
    notes: ["Minimum age 8 years old", "2m/6ft max"],
    description:
      "For kids aged 8 and up. Big smiles, little bubbles— this is where the dream begins.",
  },
  {
    name: "Discover Scuba Diving",
    duration: "2 hours",
    notes: [
      "Minimum age 10 years old",
      "12m/40ft max",
      "POOL ONLY DIVE or,",
      "OPEN WATER",
    ],
    description:
      "Never dived before? We've got you. Get a taste of scuba in a controlled, guided session in the pool, and in open water—perfect for travelers or the just-curious.",
  },
  {
    name: "Discover Snorkeling",
    duration: "1 hour",
    notes: ["Minimum age 8 years old"],
    description:
      "No tanks required. Explore vibrant reefs from the surface with an experienced guide by your side.",
  },
  {
    name: "Advanced Snorkeling",
    duration: "2 hours",
    notes: ["Minimum age 12 years old", "12m max"],
    description:
      "For confident snorkelers ready to push deeper. We’ll teach you the art of duck diving, proper finning, and how to get the most from your breath.",
  },
];

const data = [
  {
    video: "Turtle%20David.mp4",
    title: "Scuba Diver",
    description:
      "A quick-start course for those short on time. Dive safely with a professional up to 12 meters.",
    price: "PHP 17,500 / USD 317",
    duration: "1-2 Days",
    depth: "MAX 12M/40FT",
    equipment: [
      "Scuba Tank",
      "Weights",
      "BCD",
      "Regulator",
      "Mask",
      "Snorkel",
      "Booties",
      "Fins",
      "Wet Suit",
      "Dive Computer",
    ],
    prerequisites: [
      "Able to Swim",
      "Medically Fit for Diving",
      "Comfortable in the water",
      "Minimum age: 10",
    ],
  },
  {
    video: "Turtle%20David.mp4",
    title: "Open Water Diver",
    description:
      "Our most popular course—and the gold standard for beginners. You’ll leave with lifelong skills, a global license, and the confidence to dive independently.",
    price: "PHP 30,500 / USD 552",
    duration: "3-4 Days",
    depth: "MAX 12M/40FT",
    equipment: [
      "Scuba Tank",
      "Weights",
      "BCD",
      "Regulator",
      "Mask",
      "Snorkel",
      "Booties",
      "Fins",
      "Wet Suit",
      "Dive Computer",
      "Compass",
      "DSMB",
    ],
    prerequisites: [
      "Able to Swim",
      "Medically Fit for Diving",
      "Comfortable in the water",
      "Minimum age: 10",
    ],
  },
  {
    video: "Turtle%20David.mp4",
    title: "Advanced Open Water Diver",
    description:
      "Take your diving to the next level: experience deeper dives, better control, and specialty training tailored to your interests.",
    price: "PHP 21,500 / USD 389",
    duration: "2-3 Days",
    depth: "MAX 12M/40FT",
    equipment: [
      "Scuba Tank",
      "Weights",
      "BCD",
      "Regulator",
      "Mask",
      "Snorkel",
      "Booties",
      "Fins",
      "Wet Suit",
      "Dive Computer",
      "Compass",
      "DSMB",
      "Specialty equipment may include: Lift Bag, Flash Light, Ropes",
    ],
    prerequisites: [
      "PADI Open Water Diver Certification or equivalent",
      "Able to Swim",
      "Medically Fit for Diving",
      "Comfortable in the water",
      "Minimum age: 10",
    ],
  },
  {
    video: "Turtle%20David.mp4",
    title: "Rescue Diver",
    description:
      "Not for the faint-hearted, and totally worth it. Learn to think like a safety diver, manage emergencies, and look out for your dive buddies—serious fun.",
    price: "PHP 28,000 / USD 507",
    duration: "3 Days",
    depth: "MAX 12M/40FT",
    equipment: ["Rescue breathing mask", "Oxygen tank and regulator"],
    prerequisites: [
      "PADI Advanced Open Water Diver and Emergency First Response Primary and Secondary Care (or equivalent)",
      "Able to Swim",
      "Medically Fit for Diving",
      "Comfortable in the water",
      "Minimum age: 10",
    ],
  },
  {
    video: "Turtle%20David.mp4",
    title: "Emergency First Response (EFR)",
    description:
      "Learn practical, calm-under-pressure first aid skills that every diver (and human) should have.",
    price: "PHP 12,000/USD 217.00",
    duration: "6-8 Hours",
    equipment: [
      "CPR Mannequin",
      "First Aid Equipment",
      "Oxygen Tank and Regulator",
    ],
  },

  {
    title: "PADI Specialty Diver courses between Advanced and Rescue",
    description:
      "Take your diving to the next level: experience deeper dives, better control, and specialty training tailored to your interests.",
    price: "PHP 9,500 / USD 170",
    duration: "2-3 Days",
    depth: "MAX 40M/135FT",
    equipment: [
      "Scuba Tank",
      "Weights",
      "BCD",
      "Regulator",
      "Mask",
      "Snorkel",
      "Booties",
      "Fins",
      "Wet Suit",
      "Dive Computer",
      "Compass",
      "DSMB",
      "Specialty equipment may include: Lift Bag, Flash Light, Ropes",
    ],
    prerequisites: [
      "PADI Open Water Diver Certification or equivalent",
      "Able to Swim",
      "Medically Fit for Diving",
      "Comfortable in the water",
      "Minimum age: 10",
    ],
  },
];

const proLevelTraining = [
  {
    title: "Divemaster",
    description:
      "The first step into professional diving. Gain hands-on experience, assist with real students, and become the diver others look up to.",
    duration: "10-15 Days",
    price: "Starts at PHP 65,000 / USD 1,161",
    prerequisites: [
      "PADI Advanced Open Water Diver and Emergency First Response Primary and Secondary Care",
    ],
  },
  {
    title: "Specialty Instructor Course",
    description:
      "Expand your skills. Offer more to your future students. Get certified to teach the specialties that matter to you.",
    duration: "1-2 days per specialty instructor course",
    price: "Starts at PHP 15,000 / USD 268",
  },
];

const proLevelInternships = [
  {
    title: "Divemaster Internship",
    description:
      "This internship This internship isn’t just about logging dives—it’s about earning your place in the dive industry through mentorship, real experience, and a clear standard of excellence. You’ll work side-by-side with experienced instructors and be immersed in all aspects of daily dive operations, including:",
    lists: [
      "Assisting real students across multiple course levels",
      "Leading dives and guiding certified divers under supervision",
      "Customer service and guest care&mdash;before and after every dive",
      "Learning how to sell dive courses and gear with confidence and integrity",
      "Tank filling procedures and safety",
      "Basic boat operation and crew responsibilities",
      "Equipment care and troubleshoot fundamentals",
    ],
    price: "PHP 10000 / USD 179 per week",
    duration: "10 days or 40 hours",
    subdescription:
      "This program is for those who want to do it right—who want to lead with knowledge, maturity, and calm underwater presence. We don’t just certify divemasters—we help create dependable dive leaders.",
  },
  {
    title: "Instructor Internship",
    description:
      "Our Instructor Internship offers more than just an IDC—it’s a professional development program designed to prepare you for everything that comes with becoming a working dive instructor. Alongside your Instructor Development Course and specialty instructor training, you’ll gain real-world experience in:",
    lists: [
      "Teaching and assisting at every course level,",
      "Building comfort and confidence in front of real students",
      "Providing excellent guest service, both in and out of the water",
      "Selling courses, upgrades, and gear in a way that feels natural and ethical",
      "Tank handling and compressor basics",
      "Boat prep, safety, and daily operations",
      "Equipment care and how to handle common tech issues",
    ],
    price: "PHP 10000 / USD 179 per week",
    duration: "10 days or 40 hours",
    subdescription:
      "You'll also get one-on-one mentorship with a PADI Course Director, personalized feedback, and guidance on navigating the dive industry after certification. Our goal isn't to just help you pass the IE&mdash;we want you to leave ready for work, ready to teach, and ready to stand out.",
  },
];

export default function Courses() {
  const { openForCourse } = useContactModal();
  return (
    <>
      <Header />
      <Iskuba />
      <main className="min-h-screen h-full w-full">
        <section className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-4 items-center lg:flex-row flex-col-reverse">
          <div className="flex-1 px-4 lg:px-0 py-4">
            <div>
              <h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                COURSES
              </h6>
              <h1 className="font-bold text-black text-2xl md:text-4xl">
                Not just a course. A foundation for a lifetime of diving.
              </h1>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <p>
                When you train with us, you’re not just checking a box—you’re
                gaining real skills, real confidence, and a mentor who’s
                invested in your growth. With over 20 years of experience and a
                teaching style that’s firm, focused, and deeply rewarding, we
                don’t just get you certified—we make sure you’re ready.
              </p>
              <p>
                Whether it’s your first breath underwater or your first step
                toward becoming a dive professional, we’ll meet you where you
                are—and challenge you to go further.
              </p>
            </div>
          </div>
          <div className="lg:flex-[1.5]">
            <img
              src="/images/courses.jpg"
              alt="Courses Hero"
              className="w-full h-auto object-cover lg:rounded-lg lg:shadow-lg aspect-video object-top-left"
            />
          </div>
        </section>
        <section
          className="bg-foreground/10 min-h-2/4 py-4 px-4 lg:pt-20"
          id="experience-programs">
          <div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col">
            <div className="py-4">
              <h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                EXPERIENCE PROGRAMS
              </h6>
              <h1 className="font-bold text-black text-2xl md:text-4xl">
                Curious? Start here.
              </h1>
            </div>
            <div>
              <p>
                Not sure about taking a certification course just yet? We got
                you covered.
              </p>
              <p>
                These no-commitment, low-pressure programs are ideal for trying
                the water before fully committing.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto w-full py-4">
            <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {experiencePrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xs p-4 flex-1 w-full flex flex-col justify-between">
                  <div>
                    <h1 className="font-bold text-black text-xl md:text-2xl">
                      {program.name}
                    </h1>
                    <h4 className="pt-2 font-bold">
                      COURSE DURATION: {program.duration}
                    </h4>
                    <ul className="px-2.5 py-2 list-disc">
                      {program.notes.map((note, index) => (
                        <li key={index} className="text-xs">
                          {note}
                        </li>
                      ))}
                    </ul>
                    <p>{program.description}</p>
                  </div>
                  <div className="py-4">
                    <button
                      onClick={() => openForCourse(program.name)}
                      className="bg-[#3495ff] w-full font-bold text-white py-4 rounded-md cursor-pointer hover:bg-blue-400/95 transition duration-75">
                      DIVE IN
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>{" "}
        <section id="certification-courses" className="pb-12 pt-0 lg:py-12">
          <div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col lg:flex-row">
            <div className="flex-1">
              <div className="p-4">
                <h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  CERTIFICATION COURSES
                </h6>
                <h1 className="font-bold text-black text-2xl md:text-4xl">
                  Your path to becoming a real diver&mdash;done right.
                </h1>
              </div>
              <p className="pb-8 px-4">
                We believe in building divers, not just certifying them. That
                means clear instruction, patient coaching, and high standards
                that give you true underwater confidence. Our course fees
                include equipment rentals and professional fees for entry-level
                courses.
                {/* You have the option to purchase your elearning course materials HERE. */}
              </p>
            </div>
            <div className="w-full flex-1">
              <video
                className="block w-full h-64 lg:h-full object-cover rounded-none lg:rounded-2xl"
                autoPlay
                loop
                muted
                playsInline>
                <source src={`/videos/Turtle%20David.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
          <Carousel
            opts={{ loop: true, align: "center" }}
            // plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent className="px-6 py-4">
              {data.map((course, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis-[90%] sm:basis-[66%] lg:basis-[30%]">
                    <CoursesBox
                      key={index}
                      title={course.title}
                      description={course.description}
                      price={course.price}
                      duration={course.duration}
                      depth={course.depth}
                      equipment={course.equipment}
                      prerequisites={course.prerequisites}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="max-w-screen-xl px-4 mx-auto w-full flex items-center gap-4">
              <CarouselPrevious />
              <CarouselDots />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
        <section id="pro-level-training" className="bg-foreground/10 py-20">
          <div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <div className="p-4">
                  <h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                    PRO-LEVEL TRAINING
                  </h6>
                  <h1 className="font-bold text-black text -2xl md:text-4xl">
                    Lead. Mentor. Make a difference underwater.
                  </h1>
                </div>
                <p className="pb-8 px-4">
                  We believe in building divers, not just certifying them. That
                  means clear instruction, patient coaching, and high standards
                  that give you true underwater confidence. Our course fees
                  include equipment rentals and professional fees for
                  entry-level courses.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="/images/pro-level-training.JPG"
                  alt="Pro-Level Training"
                  className="w-full h-auto object-cover lg:rounded-lg lg:shadow-lg aspect-video object-top-left"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid-cols-1 grid md:grid-cols-2 gap-4 max-w-screen-xl mx-auto w-full py-4">
              {proLevelTraining.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xs p-4 flex-1 w-full flex flex-col justify-between">
                  <CoursesBox
                    key={index}
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    duration={course.duration}
                    prerequisites={course.prerequisites}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pro-level-internship" className="py-20">
          <div className="max-w-screen-xl mx-auto w-full lg:px-4 lg:py-4 flex gap-2 flex-col">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <img
                  src="/images/pro-level-internship-2.JPG"
                  alt="Pro-Level Internship"
                  className="w-full h-auto object-cover lg:rounded-lg lg:shadow-lg aspect-video object-top-left"
                />
              </div>
              <div className="flex-1">
                <div className="p-4">
                  <h6 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                    PRO-LEVEL INTERNSHIPS
                  </h6>
                  <h1 className="font-bold text-black text -2xl md:text-4xl">
                    Become the diver others look up to.
                  </h1>
                </div>
                <p className="pb-8 px-4">
                  This internship isn’t just about logging dives—it’s about
                  earning your place in the dive industry through mentorship,
                  real experience, and a clear standard of excellence. You’ll
                  work side-by-side with experienced instructors and be immersed
                  in all aspects of daily dive operations, including:
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {proLevelInternships.map((course, index) => (
                <CoursesBox
                  key={index}
                  title={course.title}
                  description={course.description}
                  price={course.price}
                  duration={course.duration}
                  lists={course.lists}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
