import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Temario() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-black space-y-1"
    >
      <AccordionItem
        value="item-1"
        className=" border border-[#C8C8C8] bg-white "
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline">
          <h2 className="text-xl font-medium hover:text-[#2729A4] text-[#515151]">
            Fundamentos del desarrollo web
          </h2>
        </AccordionTrigger>
        <AccordionContent className="p-8">
          <p className="text-lg font-semibold pb-[10px]">
            Introducción al desarrollo web: se presenta un resumen de las
            principales tecnología para el desarrollo de aplicaciones web
          </p>
          <div className="text-base space-y-[10px]">
            <li>
              Principales tecnologías web: HTML, CSS, Frameworks de
              Backend, Frameworks de Frontend, Herramientas en nube
            </li>
            <li>Funcionamiento de las aplicaciones web</li>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className=" border border-[#C8C8C8] bg-white "
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline">
          <h2 className="text-[20px] hover:text-[#2729A4] text-[#515151]">
            Fundamentos del desarrollo web
          </h2>
        </AccordionTrigger>
        <AccordionContent className="p-8">
          <p className="text-lg font-medium pb-[10px]">
            Introducción al desarrollo web: se presenta un resumen de las
            principales tecnología para el desarrollo de aplicaciones web
          </p>
          <div className="text-base space-y-[10px]">
            <li>
              Principales tecnologías web: HTML, CSS, Frameworks de
              Backend, Frameworks de Frontend, Herramientas en nube
            </li>
            <li>Funcionamiento de las aplicaciones web</li>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className=" border border-[#C8C8C8] bg-white "
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline">
          <h2 className="text-[20px] hover:text-[#2729A4] text-[#515151]">
            Fundamentos del desarrollo web
          </h2>
        </AccordionTrigger>
        <AccordionContent className="p-8">
          <p className="text-lg font-medium pb-[10px]">
            Introducción al desarrollo web: se presenta un resumen de las
            principales tecnología para el desarrollo de aplicaciones web
          </p>
          <div className="text-base space-y-[10px]">
            <li>
              Principales tecnologías web: HTML, CSS, Frameworks de
              Backend, Frameworks de Frontend, Herramientas en nube
            </li>
            <li>Funcionamiento de las aplicaciones web</li>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
