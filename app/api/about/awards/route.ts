import { NextResponse } from "next/server";
import { awards } from "@/data/about/awards";
import { Award } from "@/types/about";

export const GET: () => Promise<NextResponse<Award[]>> = async () => {
  return NextResponse.json(awards);
};
