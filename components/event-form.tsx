"use client";

import { useState } from "react";
import { z } from "zod";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";
import { WalkEvent } from "@/lib/types";

const eventSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  meetingPoint: z.string().min(3, "Le point de rencontre est requis"),
  startsAt: z.string().refine((val) => new Date(val) > new Date(), "La date doit être dans le futur"),
  maxParticipants: z.number().min(2, "Minimum 2 participants").max(20, "Maximum 20 participants"),
});

type EventFormProps = {
  onCreateEvent: (event: WalkEvent) => void;
};

export function EventForm({ onCreateEvent }: EventFormProps) {
  const { locale } = useLocale();
  const [title, setTitle] = useState("");
  const [meetingPoint, setMeetingPoint] = useState("");
  const [startsAt, setStartsAt] = useState("");
  const [maxParticipants, setMaxParticipants] = useState(6);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    setSuccess(false);

    const result = eventSchema.safeParse({
      title,
      meetingPoint,
      startsAt,
      maxParticipants,
    });

    if (!result.success) {
      setErrors(result.error.errors.map((err) => err.message));
      return;
    }

    const newEvent: WalkEvent = {
      id: `e-${Date.now()}`,
      title,
      routeId: "r1",
      hostUserId: "u1",
      meetingPoint,
      startsAt: new Date(startsAt).toISOString(),
      maxParticipants,
      isPublic: true,
      participantIds: ["u1"],
    };

    onCreateEvent(newEvent);
    setTitle("");
    setMeetingPoint("");
    setStartsAt("");
    setMaxParticipants(6);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-2 md:grid-cols-2">
      <input
        placeholder={t(locale, "eventTitlePlaceholder")}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-xl border p-2"
      />
      <input
        placeholder={t(locale, "eventMeetingPlaceholder")}
        value={meetingPoint}
        onChange={(e) => setMeetingPoint(e.target.value)}
        className="rounded-xl border p-2"
      />
      <input
        type="datetime-local"
        value={startsAt}
        onChange={(e) => setStartsAt(e.target.value)}
        className="rounded-xl border p-2"
      />
      <input
        type="number"
        min={2}
        max={20}
        value={maxParticipants}
        onChange={(e) => setMaxParticipants(Number(e.target.value))}
        placeholder={t(locale, "eventMaxParticipants")}
        className="rounded-xl border p-2"
      />
      {errors.length > 0 && (
        <div className="text-sm text-red-600 md:col-span-2">
          {errors.map((err, i) => <p key={i}>{err}</p>)}
        </div>
      )}
      {success && (
        <p className="text-sm text-green-600 md:col-span-2">Marche créée avec succès !</p>
      )}
      <button type="submit" className="rounded-xl bg-pine-500 px-4 py-2 text-white md:col-span-2">
        {t(locale, "btnCreateEvent")}
      </button>
    </form>
  );
}
