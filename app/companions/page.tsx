import { CompanionCard } from "@/components/companion-card";
import { users } from "@/lib/data";

export default function CompanionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Trouver des compagnons de marche</h1>
      <div className="card grid gap-2 md:grid-cols-4">
        <select className="rounded-xl border p-2"><option>Arrondissement</option></select>
        <select className="rounded-xl border p-2"><option>Taille du chien</option></select>
        <select className="rounded-xl border p-2"><option>Niveau d'énergie</option></select>
        <select className="rounded-xl border p-2"><option>Type de marche</option></select>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => <CompanionCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
