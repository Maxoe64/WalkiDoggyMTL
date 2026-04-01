"use client";

import { useState } from "react";
import { RouteCard } from "@/components/route-card";
import { RouteMap } from "@/components/route-map";
import { routes } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function RoutesPage() {
  const { locale } = useLocale();
  const [duration, setDuration] = useState("all");
  const [distance, setDistance] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [surface, setSurface] = useState("all");

  const filtered = routes.filter((route) => {
    if (duration !== "all") {
      if (duration === "short" && route.durationMin >= 45) return false;
      if (duration === "medium" && (route.durationMin < 45 || route.durationMin > 75)) return false;
      if (duration === "long" && route.durationMin <= 75) return false;
    }
    if (distance !== "all") {
      if (distance === "under3" && route.distanceKm >= 3) return false;
      if (distance === "3to5" && (route.distanceKm < 3 || route.distanceKm > 5)) return false;
      if (distance === "over5" && route.distanceKm <= 5) return false;
    }
    if (difficulty !== "all" && route.difficulty !== difficulty) return false;
    if (surface !== "all" && route.surface !== surface) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageRoutes")}</h1>
      <div className="card grid gap-2 md:grid-cols-4">
        <select value={duration} onChange={(e) => setDuration(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterDuration")}</option>
          <option value="short">&lt; 45 min</option>
          <option value="medium">45–75 min</option>
          <option value="long">&gt; 75 min</option>
        </select>
        <select value={distance} onChange={(e) => setDistance(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterDistance")}</option>
          <option value="under3">&lt; 3 km</option>
          <option value="3to5">3–5 km</option>
          <option value="over5">&gt; 5 km</option>
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterDifficulty")}</option>
          <option value="easy">easy</option>
          <option value="moderate">moderate</option>
          <option value="challenging">challenging</option>
        </select>
        <select value={surface} onChange={(e) => setSurface(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterSurface")}</option>
          <option value="asphalte">asphalte</option>
          <option value="gravier">gravier</option>
          <option value="mixte">mixte</option>
        </select>
      </div>
      <RouteMap routes={filtered} />
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((route) => <RouteCard key={route.id} route={route} />)}
      </div>
    </div>
  );
}
