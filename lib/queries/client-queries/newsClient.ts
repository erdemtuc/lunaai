import { ArticleType } from "@/lib/types/news-types";


export async function fetchNextCenterNews(): Promise<ArticleType | null> {
  const res = await fetch("/api/next-news");
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch next news");
  return res.json();
}