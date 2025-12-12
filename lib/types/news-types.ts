import { getArticles, getTrainings } from "../queries/article";
import { getCompanyNewses } from "../queries/company";

export interface FilterGroup {
  name: string;
  options: string[];
}

export type CompanyNewsItem = {
  id: number | null;
  published_date: Date | null;
  author: string | null;
  url: string | null;
  header: string | null;
  portal: string | null;
};

export type ArticlesArrayType = Awaited<ReturnType<typeof getArticles>>;
export type NewsesArrayType = Awaited<ReturnType<typeof getCompanyNewses>>;
export type TrainingsArrayType = Awaited<ReturnType<typeof getTrainings>>;
