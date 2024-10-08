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
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4] "
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-xl font-medium text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Fundamentos del desarrollo web
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
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Lenguaje de programacion: Python
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
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Sistema de control de versiones: GIT
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
      </AccordionItem>{" "}
      <AccordionItem
        value="item-4"
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          HTML
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
      </AccordionItem>{" "}
      <AccordionItem
        value="item-5"
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          CSS
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
      </AccordionItem>{" "}
      <AccordionItem
        value="item-6"
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Framework de desarrollo web: Django
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
        value="item-7"
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Bases de datos: MySQL
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
        value="item-8"
        className=" border-2 border-[#C8C8C8] bg-white data-[state=open]:border-[#2729A4]"
      >
        <AccordionTrigger className="border-b p-8 hover:no-underline text-[20px] text-[#515151] data-[state=open]:border-[#2729A4] data-[state=open]:text-[#2729A4]">
          Javascript y React
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
