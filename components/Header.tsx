"use client";
import { useEffect, useState } from "react"

import { useMediaQuery } from "~/hooks/useMediaQuery";
import { Drawer, DrawerClose, DrawerTrigger, DrawerContent, DrawerDescription, DrawerTitle, DrawerHeader } from "~/components/ui/drawer";

export default function Header() {

  const [title, setTitle] = useState<string>("");
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  const isDesktop = useMediaQuery('(min-width: 48rem)');

  const pages = [
    { name: "About", href: "/", children: [] },
    { name: "Experience", href: "/experience", children: [] },
    {
      name: "Certification",
      href: "/certification",
      children: [
        {
          name: "Scuba Diver",
          href: "/certification/scuba-diver",
        },
        {
          name: "Open Water Diver",
          href: "/certification/open-water-diver",
        },
        {
          name: "Advanced Open Water Diver",
          href: "/certification/advanced-open-water-diver",
        },
        { name: "Rescue Diver", href: "/certification/rescue-diver" },
        {
          name: "Emergency First Response Response (EFR)",
          href: "/certification/EFR",
        },
      ],
    },
    { name: "News", href: "/news", children: [] },
    { name: "Contact", href: "/contact", children: [] },
  ];


  useEffect(() => {
    setTitle(document.title);
    setHasMounted(true);
  }, []);


  if(!hasMounted){
    // Render a minimal fallback that matches client markup before hydration
    // For example, render nothing or a placeholder nav
    return (
      <header className="bg-white fixed bottom-0 w-full md:sticky md:top-0">
        <section className="max-w-screen-xl mx-auto"></section>
      </header>
    );
  }

  return (
    <>
      <header className="bg-white flex justify-between fixed bottom-0 border-t border-t-black/25 w-full md:border-t-0 md:sticky md:bottom-auto md:top-0 md:border-b md:border-b-black/25 z-100">
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

          {isDesktop ? (
            <nav className="justify-end items-center flex px-2">
              <ul className="flex gap-6 uppercase">
                {pages.map((page, index) => {
                  return (
                    <li key={index}>
                      <a href={page.href}>{page.name}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : (
            <Drawer open={hamburger} onOpenChange={setHamburger}>
              <DrawerTrigger asChild>
                <div
                  onClick={() => setHamburger(!hamburger)}
                  className="flex justify-center flex-col md:hidden"
                >
                  <svg
                    className={`${
                      hamburger ? "active" : ""
                    } ham hamRotate ham4`}
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
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-md px-2">
                  <DrawerHeader>
                    <DrawerTitle>{`${title}`}</DrawerTitle>
                  </DrawerHeader>
                  <nav className="pb-12">
                    <ul className="flex flex-col">
                      {pages.map((page, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={page.href}
                              className="flex justify-between items-center py-3 px-4 hover:bg-black/15 rounded-md"
                            >
                              <span>{page.name}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                              </svg>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </section>
      </header>
    </>
  );
}