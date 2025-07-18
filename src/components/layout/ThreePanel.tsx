import Image from "next/image";

export type ThreePanelItem = {
  title: string;
  description: string;
  image: string;
};

type ThreePanelProps = {
  title: string;
  items: ThreePanelItem[];
};

export default function ThreePanel({ title, items }: ThreePanelProps) {
  return (
    <>
      <h2 className="text-xs uppercase tracking-wide font-bold text-black border-b border-black pb-2 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 2xl:gap-6">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="relative h-70 md:h-120 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold py-4 ">{item.title}</h3>

              <div className="relative h-[1px] bg-border overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full w-0 bg-black
          transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]
          group-hover:w-full"
                />
              </div>

              <p className="text-sm text-neutral-700 pt-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
