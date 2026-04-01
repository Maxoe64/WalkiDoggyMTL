"use client";

import { useState } from "react";
import { pets, walkRequests } from "@/lib/data";
import { UserProfile } from "@/lib/types";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export function CompanionCard({ user }: { user: UserProfile }) {
  const { locale } = useLocale();
  const pet = pets.find((candidate) => candidate.ownerId === user.id);
  const request = walkRequests.find((candidate) => candidate.toUserId === user.id);
  const existingRelation = request?.status ?? "none";
  const [requestSent, setRequestSent] = useState(false);

  const relation = requestSent ? "pending" : existingRelation;

  const relationLabel: Record<string, string> = {
    none: t(locale, "labelNotConnected"),
    pending: t(locale, "labelRequestPending"),
    accepted: t(locale, "labelConnected")
  };

  return (
    <article className="card space-y-3">
      <div className="flex items-center gap-3">
        <img src={user.photoUrl} alt={user.displayName} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h3 className="font-semibold">{user.displayName}</h3>
          <p className="text-sm text-slate-600">{user.boroughName}</p>
        </div>
      </div>
      <p className="text-sm">{user.bio}</p>
      {pet ? <p className="text-sm text-slate-700">🐶 {pet.name} · {pet.breed} · {t(locale, "filterEnergyLevel").toLowerCase()} {pet.energyLevel}</p> : null}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-600">{relationLabel[relation]}</span>
        <button
          onClick={() => setRequestSent(true)}
          disabled={requestSent || existingRelation !== "none"}
          className={`rounded-full px-3 py-1 text-sm text-white ${
            requestSent || existingRelation !== "none"
              ? "cursor-not-allowed bg-slate-300"
              : "bg-pine-500 hover:bg-pine-600"
          }`}
        >
          {requestSent || existingRelation !== "none"
            ? t(locale, "btnRequestSent")
            : t(locale, "btnSendRequest")}
        </button>
      </div>
    </article>
  );
}
