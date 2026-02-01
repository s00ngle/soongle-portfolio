import { NextResponse } from "next/server";
import { certificates } from "@/data/about/certificates";
import { Certificate } from "@/types/about";

export const GET: () => Promise<NextResponse<Certificate[]>> = async () => {
  return NextResponse.json(certificates);
};
