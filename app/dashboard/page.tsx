import Link from "next/link";
import { users, walkEvents, walkRequests } from "@/lib/data";

export default function DashboardPage() {
  const currentUser = users[0];
  const myEvents = walkEvents.filter((event) => event.participants.includes(currentUser.id));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bonjour {currentUser.displayName} 👋</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="card"><p className="text-sm text-slate-600">Indice confiance</p><p className="text-2xl font-bold">{currentUser.trustScore}/5</p></div>
        <div className="card"><p className="text-sm text-slate-600">Demandes</p><p className="text-2xl font-bold">{walkRequests.length}</p></div>
        <div className="card"><p className="text-sm text-slate-600">Marches prévues</p><p className="text-2xl font-bold">{myEvents.length}</p></div>
      </div>
      <div className="card">
        <h2 className="font-semibold">Prochaines marches</h2>
        <ul className="mt-2 list-disc pl-4 text-sm">
          {myEvents.map((event) => <li key={event.id}>{event.title} · {new Date(event.startAt).toLocaleString("fr-CA")}</li>)}
        </ul>
        <Link href="/events" className="mt-3 inline-block text-sm font-medium text-urban-700">Gérer mes marches →</Link>
      </div>
    </div>
  );
}
