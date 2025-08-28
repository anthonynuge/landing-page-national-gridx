import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NGX_CLIENT_SOLUTIONS } from "./constants";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {NGX_CLIENT_SOLUTIONS.map((solution, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col space-y-4 aspect-square justify-start p-6">
                  <solution.icon className="w-16 h-16 text-primary mb-24" />
                  <h3 className="text-2xl ">{solution.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-6 left-12">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}

export default function ServiceSection() {
  return (
    <section className="h-full w-full flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 flex flex-col">
        <h2 className="text-4xl font-bold mb-4">What we can do for you</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-4">
          At National Grid X, we help businesses take control of their energy
          future. From securing competitive contracts and reducing costs to
          delivering strategic advice, ESG alignment, and innovative technology
          solutions, our expertise ensures you gain efficiency, stability, and
          long-term value.
        </p>
        <div className="mt-10">
          <CarouselSize />
        </div>
      </div>
    </section>
  );
}
