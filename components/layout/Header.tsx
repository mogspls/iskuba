"use client";
import { useEffect, useState } from "react"

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerHeader } from "@/components/ui/drawer";
import { usePathname } from "next/navigation";

export const pages = [
  {
    title: "About",
    name: "About Us — ISKUBA Philippines",
    href: "/about",
  },
  {
    title: "Courses",
    name: "Courses we offer— ISKUBA Philippines",
    href: "/courses",
  },
  {
    title: "Leisure Dives",
    name: "Leisure Dives — ISKUBA Philippines",
    href: "/leisure-dives",
  },
  {
    title: "Contact Us",
    name: "Contact Us — ISKUBA Philippines",
    href: "/about#contact-us"
  },
];

export default function Header() {

  const [title, setTitle] = useState<string>("");
  const [hamburger, setHamburger] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

    const isDesktop = useMediaQuery('(min-width: 48rem)');

    const pathname = usePathname();

    useEffect(() => {
      const match = pages.find((p) => p.href === pathname);
      if (match) {
        document.title = match.name;
      } else {
        document.title = "ISKUBA Philippines";
      }
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
                      <a href={page.href}>{page.title}</a>
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
                  <nav className="pb-24">
                    <ul className="flex flex-col">
                      {pages.map((page, index) => {
                        return (
                          <li key={index}>
                            <a
                              href={page.href}
                              className="flex justify-between items-center py-3 px-4 hover:bg-black/15 rounded-md"
                            >
                              <span>{page.title}</span>
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