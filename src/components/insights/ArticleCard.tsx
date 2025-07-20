import Image from "next/image";
import { Card } from "../ui/card";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  link: string;
  category: string[];
}

export default function ArticleCard({
  title,
  description,
  image,
  date,
  author,
  link,
  category,
}: ArticleCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={link} className="block group ">
      <Card className="pt-0 pb-3 gap-2 h-full rounded-lg overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-64  overflow-hidden">
          <div className="absolute top-2 right-2 flex gap-2">
            {category.map((cat) => (
              <span
                key={cat}
                className="text-xs  bg-zinc-900/70 text-white px-2 py-1 rounded-xl z-10"
              >
                {cat}
              </span>
            ))}
          </div>

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold leading-tight ">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 px-4">
          <div className="flex items-center gap-2">
            {/* Author */}
            <span className="font-medium">{author}</span>
            {/* <span className="hidden sm:inline">•</span> */}

            {/* Categories */}
            {/* <div className="hidden sm:flex gap-1">
                {category.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
                  >
                    {cat}
                  </span>
                ))}
              </div> */}
          </div>

          <div className="flex-items-center">{formattedDate}</div>
        </div>
      </Card>
    </Link>
  );
}
