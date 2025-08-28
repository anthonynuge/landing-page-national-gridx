import Image from "next/image";
// app/insights/[slug]/page.tsx
import { notFound } from "next/navigation";
import {
  getAllArticleLinks,
  getArticleBySlug,
} from "@/components/insights/constants";
import ReactMarkdown from "react-markdown";
import PageWrapper from "@/components/layout/PageWrapper";
import Link from "next/link";

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
      {/* Top bar (mobile-first) */}
      <div className="flex items-center justify-between gap-3 py-4">
        <Link
          href="/insights"
          aria-label="Return to Insights"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:text-foreground/50"
        >
          {/* simple arrow icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Return to Insights
        </Link>

        {/* categories on mobile (wraps nicely) */}
        <div className="flex flex-wrap gap-2 md:hidden">
          {article.category.map((c) => (
            <span key={c} className="rounded-full border px-2 py-1 text-xs">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Hero image (responsive height) */}
        <div className="col-span-full relative h-64 md:h-[28rem] rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Sidebar TOC (desktop only) */}
        <aside className="hidden md:block md:col-span-1">
          <div className="sticky top-24 space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-gray-600">
              Table of Contents
            </h2>
            <ul className="text-sm leading-6 space-y-1">
              <li>
                <a href="#introduction" className="hover:underline">
                  Introduction
                </a>
              </li>
              {/* add more anchors if you generate them */}
            </ul>

            {/* Categories (desktop) */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.category.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border px-2 py-1 text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <article className="prose prose-sm md:prose-lg col-span-1 md:col-span-3 max-w-none">
          {/* Title */}
          <h1 className="mb-2">{article.title}</h1>

          {/* Meta row: date • author */}
          <p className="mt-0 text-sm text-gray-500">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </time>
            {" - "}
            <span>{article.author}</span>
          </p>

          {/* Optional dek/description */}
          {article.description && <p className="lead">{article.description}</p>}

          {/* Body */}
          <ReactMarkdown>{article.body}</ReactMarkdown>

          {/* Bottom actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/insights"
              aria-label="Return to Insights"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:text-foreground/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return to Insights
            </Link>

            {/* repeat categories at bottom on small screens */}
            <div className="flex flex-wrap gap-2 sm:ml-auto md:hidden">
              {article.category.map((c) => (
                <span key={c} className="rounded-full border px-2 py-1 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </PageWrapper>
  );
}

// Optional SEO per article
export function generateMetadata({ params }: Params) {
  const a = getArticleBySlug(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: a.link },
    openGraph: {
      title: a.title,
      description: a.description,
      images: a.image ? [{ url: a.image }] : undefined,
      type: "article",
      authors: [a.author],
      publishedTime: a.date,
    },
  };
}
