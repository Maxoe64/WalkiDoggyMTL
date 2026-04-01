import { routes, users } from "@/lib/data";
import { WalkEvent } from "@/lib/types";

export function EventCard({ event }: { event: WalkEvent }) {
  const route = routes.find((candidate) => candidate.id === event.routeId);
  const host = users.find((candidate) => candidate.id === event.hostUserId);

  return (
    <article className="card space-y-2">
      <h3 className="font-semibold">{event.title}</h3>
      <p className="text-sm text-slate-600">Hôte: {host?.displayName} · {new Date(event.startAt).toLocaleString("fr-CA")}</p>
      <p className="text-sm">Point de rencontre: {event.meetingPoint}</p>
      <p className="text-sm">Circuit: {route?.name}</p>
      <p className="text-sm text-slate-700">Participants: {event.participants.length}/{event.maxParticipants}</p>
      <button className="rounded-full bg-urban-500 px-3 py-1 text-sm text-white">Rejoindre la marche</button>
    </article>
  );
}
