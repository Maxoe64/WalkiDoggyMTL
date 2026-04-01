import { RouteCard } from "@/components/route-card";
import { RouteMap } from "@/components/route-map";
import { routes } from "@/lib/data";

export default function RoutesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Carte des circuits</h1>
      <div className="card grid gap-2 md:grid-cols-4">
        <select className="rounded-xl border p-2"><option>Durée</option></select>
        <select className="rounded-xl border p-2"><option>Distance</option></select>
        <select className="rounded-xl border p-2"><option>Difficulté</option></select>
        <select className="rounded-xl border p-2"><option>Surface</option></select>
      </div>
      <RouteMap />
      <div className="grid gap-3 md:grid-cols-2">
        {routes.map((route) => <RouteCard key={route.id} route={route} />)}
      </div>
    </div>
  );
}
