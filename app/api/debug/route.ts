import { NextResponse } from "next/server";
import { getCompanies, getCompanyNewses } from "@/lib/queries/company";
import { getTrainings } from "@/lib/queries/article";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const companyId = searchParams.get("companyId");

  const data = await getTrainings();

  console.log("api debug trainings", data);

  return NextResponse.json(data);
}
