import { NextResponse } from "next/server";
import { walkRequests } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ data: walkRequests });
}
