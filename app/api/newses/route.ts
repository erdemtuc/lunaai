import { NextResponse } from "next/server";
import { getCompanyNewses } from "@/lib/queries/company";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const companyId = searchParams.get("companyId");

  const data = await getCompanyNewses(companyId ? Number(companyId) : 1);

  return NextResponse.json(
    data.newses.map((n) => ({
      published_date: n?.published_date,
      author: n?.author,
      url: n?.url,
      id: n?.id,
      portal: n?.portal,
      header: n?.header,
    }))
  );
}
