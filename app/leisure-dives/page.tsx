"use client";

import Header from "@/components/layout/Header";
import Iskuba from "@/components/layout/Iskuba";

export default function LeisureDives() {
  return (
    <>
      <Header />
      <Iskuba />

      <main className="min-h-screen h-full w-full">
        <section className="bg-foreground/10">
          <div className="max-w-screen-xl mx-auto w-full py-16 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-6">
                <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                  LEISURE DIVES
                </h5>

                <div className="flex flex-col gap-4">
                  <h1 className="font-black text-3xl md:text-5xl leading-tight">
                    Leisure Dives — starts at PHP1250 / USD22 per dive
                  </h1>
                  <p className="text-lg md:text-2xl font-medium text-black/80">
                    Explore with confidence. Dive with professionals.
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-base md:text-xl text-black/80">
                  <p>
                    Our fun dives are more than just a splash in the water —
                    they’re guided experiences led by real dive professionals
                    who know the local sites, understand safety inside and out,
                    and care about your comfort and enjoyment at every step.
                  </p>

                  <p>
                    No shortcuts. No uncertified guides. Just real diving — done
                    right.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition"
                  >
                    Contact us to plan your dives →
                  </a>
                </div>
              </div>

              <div className="w-full">
                <img
                  src="/images/leisure-dives.jpg"
                  alt="Leisure dives at iSkuba Diving Center"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto w-full py-16 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                    WHAT YOU CAN EXPECT
                  </h5>
                  <h2 className="font-black text-2xl md:text-4xl mt-2">
                    Guided by professionals, built around safety and enjoyment
                  </h2>
                </div>

                <p className="md:text-xl text-black/80">
                  Every dive is conducted by a minimum of a PADI Divemaster —
                  and often by instructors or higher — ensuring that you get:
                </p>

                <div className="grid gap-4">
                  {[
                    "Briefings that are clear, informative, and site-specific",
                    "Expert navigation and dive planning based on current conditions",
                    "Calm, attentive guides who prioritize safety and respect for the environment",
                    "Help with equipment setup, buddy checks, and in-water support as needed",
                    "Local knowledge that brings the reef to life — from critter spotting to current awareness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 p-4 md:p-5 bg-foreground/5"
                    >
                      <p className="text-base md:text-lg font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/pro-level-training.jpg"
                    alt="Divers exploring local reef sites"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4 md:text-xl text-black/80">
                  <p>
                    Whether it’s been a while since your last dive or you’re
                    logging number 100, we meet you where you are and keep the
                    focus on safe, enjoyable exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground/10">
          <div className="max-w-screen-xl mx-auto w-full py-16 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/pro-level-internship.jpg"
                  alt="Refresher dive support and skills review"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="font-bold text-black text-sm before:block before:content-[''] before:h-0.5 before:w-12 before:bg-black flex items-center gap-2">
                    REFRESHER OPTION
                  </h5>
                  <h2 className="font-black text-2xl md:text-4xl mt-2">
                    Been a while since your last dive?
                  </h2>
                </div>

                <div className="flex flex-col gap-4 md:text-xl text-black/80">
                  <p>We’ve got you covered.</p>

                  <p>
                    If it’s been more than six months since your last logged
                    dive, we may recommend a refresher session to help you
                    regain confidence with buoyancy control, dive skills, and
                    equipment handling.
                  </p>

                  <p>
                    It’s a relaxed, guided tune-up that ensures you’re fully
                    ready before heading back into open water.
                  </p>

                  <p className="font-semibold text-black">
                    Diving should feel good, not rushed. We’ll help you ease
                    back in.
                  </p>

                  <p>
                    Please let us know your experience level and what you'd like
                    to see — we’ll take it from there.
                  </p>
                </div>

                <div>
                  <a
                    href="#contact-us"
                    className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-semibold hover:opacity-90 transition"
                  >
                    Contact us to plan your dives →
                  </a>
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
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/images/bg.jpg')",
          }}
        >
          <div className="max-w-screen-xl mx-auto w-full py-12 p-4 h-full flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex items-start flex-col gap-4 flex-1">
              <div className="bg-white rounded-2xl py-2 px-3 text-xs">
                Reach out to us
              </div>
              <h1 className="text-white font-bold text-4xl text-left">
                Plan your next dive with us.
              </h1>
              <div className="text-xl text-white space-y-2">
                <p>
                  Tell us your experience level, when you last dived, and what
                  you’d like to see.
                </p>
                <p>We’ll help you build the right dive plan.</p>
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
                  rel="noopener noreferrer"
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
    </>
  );
}