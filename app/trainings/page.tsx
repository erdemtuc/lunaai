import ArticleReview from "@/components/article/ArticleReview";
import { getArticles, getFilters, getTrainings } from "@/lib/queries/article";

export const dynamic = "force-dynamic";

export default async function TrainingsPage() {
  const [articles, filters] = await Promise.all([getArticles(), getFilters()]);

  return (
    <ArticleReview
      articles={articles}
      categories={filters.categories}
      industries={filters.industries}
    />
  );
}
