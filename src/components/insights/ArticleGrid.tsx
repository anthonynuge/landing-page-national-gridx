import SectionHeader from "../shared/SectionHeader";
import ArticleCard from "./ArticleCard";
import { ARTICLES } from "./constants";

export default function ArticleGrid() {
  return (
    <section className="max-w-7xl mx-auto mb-24">
      <SectionHeader
        subTitle="Latest Insights"
        title="Stay ahead of the curve"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ARTICLES.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
