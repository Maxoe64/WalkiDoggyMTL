"use client";

import Link from "next/link";
import { WalkRoute } from "@/lib/types";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export function RouteCard({ route }: { route: WalkRoute }) {
  const { locale } = useLocale();

  return (
    <article className="card space-y-2">
      <h3 className="text-lg font-semibold">{route.name}</h3>
      <p className="text-sm text-slate-600">{route.locationLabel} · {route.distanceKm} km · {route.durationMin} min</p>
      <p className="text-sm">{route.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="rounded-full bg-slate-100 px-2 py-1">{route.difficulty}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1">{route.surface}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1">⭐ {route.averageRating}</span>
      </div>
      <Link href={`/routes/${route.id}`} className="inline-block text-sm font-medium text-urban-700">
        {t(locale, "btnViewRoute")}
      </Link>
    </article>
  );
}
