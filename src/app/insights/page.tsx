import ArticleGrid from "@/components/insights/ArticleGrid";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroLayout from "@/components/shared/HeroLayout";

export default function InsightsPage() {
  return (
    <>
      <HeroLayout
        title="Insights"
        description="Stay ahead of the curve with our latest insights and news."
        imageUrl="/insights/news.jpg"
        scrollTargetId="start"
      />
      <PageWrapper className="space-y-24 md:space-y-52">
        <div id="start">
          <ArticleGrid />
        </div>
      </PageWrapper>
    </>
  );
}
