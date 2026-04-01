import { notFound } from "next/navigation";
import { routes } from "@/lib/data";

type Props = { params: { id: string } };

export default function RouteDetailPage({ params }: Props) {
  const route = routes.find((candidate) => candidate.id === params.id);
  if (!route) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{route.name}</h1>
      <div className="card">
        <p>{route.description}</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li>Localisation: {route.citySector}</li>
          <li>Distance: {route.distanceKm} km</li>
          <li>Durée estimée: {route.durationMin} min</li>
          <li>Difficulté: {route.difficulty}</li>
          <li>Conseils: {route.tips}</li>
          <li>Équipements: {route.amenities.join(", ")}</li>
          <li>Note moyenne: {route.rating}/5</li>
        </ul>
      </div>
      <div className="card">
        <h2 className="font-semibold">Commentaires (MVP)</h2>
        <p className="text-sm">Belle vue et ambiance respectueuse des chiens. — Camille</p>
        <p className="text-sm">Très bon circuit pour une sortie socialisation. — Alex</p>
      </div>
    </div>
  );
}
