"use client";
import { useState } from "react"

export default function Header() {

  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <header className="bg-white flex justify-between fixed bottom-0 border-t border-t-black/25 w-full md:sticky md:bottom-auto md:top-0 md:border-b md:border-b-black/25">
      <section className="max-w-screen-xl w-full mx-auto flex justify-between overflow-hidden">
        <div className="p-2">
          <a href="/" className="flex bg-white hover:bg-black/5 rounded-sm">
            <img
              src="/images/iskuba-logo.svg"
              alt="Iskuba Diving Center"
              className="py-2 px-4 select-none h-16"
            />
          </a>
        </div>
        <div
          onClick={() => setHamburger(!hamburger)}
          className="flex justify-center flex-col md:hidden"
        >
          <svg
            className={`${hamburger ? "" : "active"} ham hamRotate ham4`}
            viewBox="0 0 100 100"
            width="75"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            ></path>
            <path className="line middle" d="m 70,50 h -40"></path>
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  );
}