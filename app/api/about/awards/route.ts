import { NextResponse } from "next/server";
import { awards } from "@/data/about/awards";

export async function GET() {
  return NextResponse.json(awards);
}
