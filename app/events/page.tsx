import { EventCard } from "@/components/event-card";
import { walkEvents } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Marches planifiées</h1>
      <form className="card grid gap-2 md:grid-cols-2">
        <input placeholder="Titre de la marche" className="rounded-xl border p-2" />
        <input placeholder="Point de rencontre (public)" className="rounded-xl border p-2" />
        <input type="datetime-local" className="rounded-xl border p-2" />
        <input type="number" min={2} max={20} placeholder="Participants max" className="rounded-xl border p-2" />
        <button className="rounded-xl bg-pine-500 px-4 py-2 text-white md:col-span-2">Créer une marche</button>
      </form>
      <div className="grid gap-3 md:grid-cols-2">
        {walkEvents.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}
