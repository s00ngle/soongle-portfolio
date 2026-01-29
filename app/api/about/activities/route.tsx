import { NextResponse } from "next/server";
import { activities } from "@/data/about/activities";

export async function GET() {
  return NextResponse.json(activities);
}
