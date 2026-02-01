import { NextResponse } from "next/server";
import { activities } from "@/data/about/activities";
import { Activity } from "@/types/about";

export const GET: () => Promise<NextResponse<Activity[]>> = async () => {
  return NextResponse.json(activities);
};
