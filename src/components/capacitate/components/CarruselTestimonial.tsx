import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const listTestimonios = {
  testimonios: [
    {
      id: 1,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      autor: "Harriet Mitchell",
      cargo: "Analista de programacion",
      imagen: "/src/assets/imagendama.png",
    },
    {
      id: 2,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      autor: "Monica Cancino",
      cargo: "Analista de programacion",
      imagen: "/src/assets/imagendama.png",
    },
    {
      id: 3,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      autor: "Franco Cancino",
      cargo: "Analista de programacion",
      imagen: "/src/assets/imagendama.png",
    },
    {
      id: 4,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      autor: "David Martines",
      cargo: "Analista de programacion",
      imagen: "/src/assets/imagendama.png",
    },
    {
      id: 5,
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
      autor: "Thais",
      cargo: "Ingeniera de sistemas",
      imagen: "/src/assets/imagendama.png",
    },
  ],
};

export function CarruselTestimonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <div className="bg-[#2729A4] pl-[100px] pr-[100px]">
      <Carousel
        plugins={[plugin.current]}
        className=" "
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="px-2">
          {listTestimonios.testimonios.map((testimonio) => (
            <CarouselItem key={testimonio.id}>
              <div className="px-">
                <Card className="rounded-none ">
                  <CardContent className="flex  justify-center p-0 ">
                    {/* <div className="bg-[#2729A4] w-[300px] h-auto"></div> */}
                    <div className="flex gap-8 pr-4">
                      <img src={testimonio.imagen} className=" w-[270px]"></img>
                      <div className="flex flex-col justify-between gap-2 pt-[108px] pb-[16px]">
                        <span className="text-base ">{testimonio.texto}</span>
                        <div>
                          <p className="font-semibold">{testimonio.autor}</p>
                          <p className="border-t-2 w-fit border-black">
                            {testimonio.cargo}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="bg-[#2729A4] w-[300px] h-auto"></div> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#2729A4]" />
        <CarouselNext className="bg-[#2729A4]" />
      </Carousel>
    </div>
  );
}
