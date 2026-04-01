import { pets, walkRequests } from "@/lib/data";
import { UserProfile } from "@/lib/types";

const relationLabel: Record<string, string> = {
  none: "Non connecté",
  pending: "Demande envoyée",
  accepted: "Connecté"
};

export function CompanionCard({ user }: { user: UserProfile }) {
  const pet = pets.find((candidate) => candidate.ownerId === user.id);
  const request = walkRequests.find((candidate) => candidate.toUserId === user.id);
  const relation = request?.status ?? "none";

  return (
    <article className="card space-y-3">
      <div className="flex items-center gap-3">
        <img src={user.photoUrl} alt={user.displayName} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{user.displayName}</h3>
          <p className="text-sm text-slate-600">{user.borough}</p>
        </div>
      </div>
      <p className="text-sm">{user.bio}</p>
      {pet ? <p className="text-sm text-slate-700">🐶 {pet.name} · {pet.breed} · énergie {pet.energyLevel}</p> : null}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-600">{relationLabel[relation]}</span>
        <button className="rounded-full bg-pine-500 px-3 py-1 text-sm text-white">Envoyer une demande</button>
      </div>
    </article>
  );
}
