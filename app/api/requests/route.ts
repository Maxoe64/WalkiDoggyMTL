import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { walkRequests } from "@/lib/data";

const createRequestSchema = z.object({
  fromUserId: z.string().min(1, "fromUserId est requis"),
  toUserId: z.string().min(1, "toUserId est requis"),
  message: z.string().min(1, "Le message est requis"),
});

export async function GET() {
  try {
    return NextResponse.json({
      data: walkRequests,
      meta: { count: walkRequests.length },
    });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des demandes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = createRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Données invalides", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const newRequest = {
      id: `wr-${Date.now()}`,
      ...result.data,
      status: "pending" as const,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ data: newRequest }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la création de la demande" },
      { status: 500 }
    );
  }
}
