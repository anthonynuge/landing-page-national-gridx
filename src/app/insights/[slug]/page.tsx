import Image from "next/image";
// app/insights/[slug]/page.tsx
import { notFound } from "next/navigation";
import {
  getAllArticleLinks,
  getArticleBySlug,
} from "@/components/insights/constants";
import ReactMarkdown from "react-markdown";
import PageWrapper from "@/components/layout/PageWrapper";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  // Turn "/articles/when-to-review-contract" -> { slug: "when-to-review-contract" }
  return getAllArticleLinks().map((link) => ({
    slug: link.split("/").pop()!, // safe because all links are "/articles/<slug>"
  }));
}

export default function ArticlePage({ params }: Params) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <PageWrapper className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
        <div className="col-span-full h-96 relative rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <aside className="hidden md:block md:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-lg font-bold">Table of Contents</h2>
            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
            </ul>
          </div>
        </aside>
        <article className="prose prose-sm md:prose-lg col-span-3">
          <h1>{article.title}</h1>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </article>
      </div>
    </PageWrapper>
  );
}

// Optional SEO per article
// export function generateMetadata({ params }: Params) {
//   const a = getArticleBySlug(params.slug);
//   if (!a) return {};
//   return {
//     title: a.title,
//     description: a.description,
//     alternates: { canonical: a.link },
//     openGraph: {
//       title: a.title,
//       description: a.description,
//       images: a.image ? [{ url: a.image }] : undefined,
//       type: "article",
//       authors: [a.author],
//       publishedTime: a.date,
//     },
//   };
// }
