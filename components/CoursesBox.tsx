"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  PhilippinePeso,
  Check,
  Timer,
  WavesArrowDown,
  ListStart,
} from "lucide-react";
import { ScubaTank } from "./icons";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "./ui/accordion";
import { useContactModal } from "@/components/contact-modal";

interface Props {
  title: string;
  description?: string | null;
  price: string;
  duration?: string;
  depth?: string;
  equipment?: Array<string>;
  prerequisites?: Array<string>;
  video?: string;
  lists?: Array<string>;
  subdescription?: string;
}

export default function CoursesBox({
  title,
  price,
  description,
  duration,
  depth,
  equipment,
  prerequisites,
  video,
  lists,
  subdescription
}: Props) {
  const matches = useMediaQuery("(min-width: 768px)");
  const { openForCourse } = useContactModal();

  return (
    <article className="border border-solid shadow-md rounded-2xl flex gap-4 flex-col lg:flex-row h-full">
      {video && (
        <div className="w-full lg:flex-1 overflow-hidden rounded-xl lg:rounded-bl-xl lg:rounded-tr-none lg:rounded-br-none">
          <video
            className="block w-full h-64 lg:h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={`/videos/${video}`} type="video/mp4" />
          </video>
        </div>
      )}
      <aside className="flex-1 flex flex-col p-4 justify-between">
        <div className="flex flex-col">
          {title && <h1 className="text-lg lg:text-2xl font-bold">{title}</h1>}
          {description && (
            <p className="py-2 text-xs lg:text-base">{description}</p>
          )}
          <ul className="py-4 px-2 shadow-2xs grid grid-cols-1 lg:flex gap-4 rounded-md border-solid border border-black/25">
            {price && (
              <li className="flex gap-2 text-xs items-center">
                <PhilippinePeso />
                <div>
                  <h2 className="font-semibold flex gap-2">Price</h2>
                  <p>{price}</p>
                </div>
              </li>
            )}
            {duration && (
              <li className="flex gap-2 text-xs items-center">
                <Timer />
                <div>
                  <h2 className="font-semibold flex gap-2"> Course Duration</h2>
                  <p>{duration}</p>
                </div>
              </li>
            )}
            {depth && (
              <li className="flex gap-2 text-xs items-center">
                <WavesArrowDown />
                <div>
                  <h2 className="font-semibold flex-gap-2">Depth</h2>
                  <p>{depth}</p>
                </div>
              </li>
            )}
          </ul>
          {matches ? (
            <div className="grid grid-cols-1 md:flex md:flex-row gap-2 py-4">
              {equipment && (
                <div className="flex-1">
                  <div className="flex gap-2 items-center">
                    <ScubaTank height="24px" width="24px" />
                    <h4 className="font-bold text-sm">Equipment Used: </h4>
                  </div>
                  <ul className="list-disc pl-4 text-sm py-2">
                    {equipment.map((e: string, index: number) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
              {lists && (
                <div className="flex-1">
                  <ul className="list-disc pl-4 text-sm py-2">
                    {lists.map((e: string, index: number) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
              {prerequisites && (
                <div className="flex-1">
                  <div className="flex gap-2 items-center">
                    <Check />
                    <h4 className="font-bold text-sm">Prerequisites</h4>
                  </div>
                  <ul className="list-disc pl-4 text-sm">
                    {prerequisites.map((p: string, index: number) => (
                      <li key={index}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="py-4">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="about"
                  className="border border-solid rounded-md px-4 shadow-sm"
                >
                  <AccordionTrigger className="font-bold cursor-pointer">
                    About
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:flex md:flex-row gap-2 py-4">
                      {equipment && (
                        <div className="flex-1">
                          <div className="flex gap-2 items-center">
                            <ScubaTank height="24px" width="24px" />
                            <h4 className="font-bold text-sm">
                              Equipment Used:{" "}
                            </h4>
                          </div>
                          <ul className="list-disc pl-4 text-sm py-2">
                            {equipment.map((e: string, index: number) => (
                              <li key={index}>{e}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {prerequisites && (
                        <div className="flex-1">
                          <div className="flex gap-2 items-center">
                            <Check />
                            <h4 className="font-bold text-sm">Prerequisites</h4>
                          </div>
                          <ul className="list-disc pl-4 text-sm">
                            {prerequisites.map((p: string, index: number) => (
                              <li key={index}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
          {subdescription && <p className="py-2 text-xs lg:text-base">{subdescription}</p>}
        </div>
        <div>
          <button
            onClick={() => openForCourse(title)}
            className="bg-[#3495ff] w-full font-bold text-white py-4 rounded-md cursor-pointer hover:bg-blue-400/95 transition duration-75">
            DIVE IN
          </button>
        </div>
      </aside>
    </article>
  );
}
