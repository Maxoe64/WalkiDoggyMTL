"use client";

import dynamic from "next/dynamic";
import { WalkRoute } from "@/lib/types";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

const LeafletMap = dynamic(() => import("./leaflet-map"), { ssr: false });

type RouteMapProps = {
  routes: WalkRoute[];
};

export function RouteMap({ routes }: RouteMapProps) {
  const { locale } = useLocale();

  return (
    <div className="card">
      <h2 className="mb-3 text-lg font-semibold">{t(locale, "mapTitle")}</h2>
      <p className="mb-3 text-sm text-slate-700">{t(locale, "mapDescription")}</p>
      <LeafletMap routes={routes} />
    </div>
  );
}
