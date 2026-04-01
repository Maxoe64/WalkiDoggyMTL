"use client";

import { routes } from "@/lib/data";

export function RouteMap() {
  return (
    <div className="card">
      <h2 className="mb-3 text-lg font-semibold">Carte interactive (MVP)</h2>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-slate-100 p-3 text-sm text-slate-700">
          <p>
            Cette version MVP affiche des points de circuits sans exposer d'adresses résidentielles.
            Les points indiquent des zones publiques de rencontre.
          </p>
          <ul className="mt-2 space-y-1">
            {routes.map((route) => (
              <li key={route.id}>📍 {route.name} ({route.lat.toFixed(3)}, {route.lng.toFixed(3)})</li>
            ))}
          </ul>
        </div>
        <iframe
          title="Montréal map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-73.95%2C45.40%2C-73.45%2C45.70&layer=mapnik"
          className="h-80 w-full rounded-xl border border-slate-200"
        />
      </div>
    </div>
  );
}
