import { prisma } from "@/lib/prisma";

export async function getCompanies() {
  const companies = await prisma.company.findMany({
    orderBy: {
      id: 'asc', 
    },
  });

  return {
    companies,
  };
}