import Link from "next/link";
import { pets, users } from "@/lib/data";

export default function ProfilePage() {
  const user = users[0];
  const pet = pets.find((candidate) => candidate.ownerId === user.id);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profil utilisateur</h1>
      <div className="card space-y-2">
        <p><strong>Nom:</strong> {user.displayName}</p>
        <p><strong>Secteur:</strong> {user.borough}</p>
        <p><strong>Langue:</strong> {user.language}</p>
        <p><strong>Disponibilités:</strong> {user.availability}</p>
        <p><strong>Niveau d'activité:</strong> {user.activityLevel}</p>
        <p><strong>Préférence de marche:</strong> {user.walkPreference}</p>
      </div>
      {pet ? <Link href={`/pets/${pet.id}`} className="inline-block rounded-full bg-urban-500 px-4 py-2 text-white">Voir le profil de {pet.name}</Link> : null}
    </div>
  );
}
