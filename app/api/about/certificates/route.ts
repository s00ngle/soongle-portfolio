import { NextResponse } from "next/server";
import { certificates } from "@/data/about/certificates";

export async function GET() {
  return NextResponse.json(certificates);
}
