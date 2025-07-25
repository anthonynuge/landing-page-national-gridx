import { NGX_CLIENT_SOLUTIONS } from "../home/constants";
import { Card, CardContent } from "../ui/card";

export default function ServicesGrid() {
  return (
    <section className=" h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-4 w-full">
          {NGX_CLIENT_SOLUTIONS.map((solution, index) => (
            <Card key={index} className="w-full">
              <CardContent className="flex flex-col space-y-4 aspect-square justify-start p-6">
                <solution.icon className="w-16 h-16 text-primary mb-24" />
                <h3 className="text-2xl ">{solution.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
