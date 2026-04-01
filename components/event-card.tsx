"use client";

import { useState } from "react";
import { routes, users } from "@/lib/data";
import { WalkEvent } from "@/lib/types";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export function EventCard({ event }: { event: WalkEvent }) {
  const { locale } = useLocale();
  const route = routes.find((candidate) => candidate.id === event.routeId);
  const host = users.find((candidate) => candidate.id === event.hostUserId);
  const [joined, setJoined] = useState(false);
  const participantCount = event.participantIds.length + (joined ? 1 : 0);
  const isFull = participantCount >= event.maxParticipants;

  return (
    <article className="card space-y-2">
      <h3 className="font-semibold">{event.title}</h3>
      <p className="text-sm text-slate-600">
        {t(locale, "labelHost")}: {host?.displayName} · {new Date(event.startsAt).toLocaleString(locale === "fr" ? "fr-CA" : "en-CA")}
      </p>
      <p className="text-sm">{t(locale, "labelMeetingPoint")}: {event.meetingPoint}</p>
      <p className="text-sm">{t(locale, "labelRoute")}: {route?.name}</p>
      <p className="text-sm text-slate-700">
        {t(locale, "labelParticipants")}: {participantCount}/{event.maxParticipants}
      </p>
      <button
        onClick={() => setJoined(!joined)}
        disabled={isFull && !joined}
        className={`rounded-full px-3 py-1 text-sm text-white ${
          joined
            ? "bg-slate-400 hover:bg-slate-500"
            : isFull
              ? "cursor-not-allowed bg-slate-300"
              : "bg-urban-500 hover:bg-urban-600"
        }`}
      >
        {joined ? t(locale, "btnLeaveWalk") : t(locale, "btnJoinWalk")}
      </button>
    </article>
  );
}
