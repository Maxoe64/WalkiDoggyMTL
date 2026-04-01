"use client";

import { useState } from "react";
import { EventCard } from "@/components/event-card";
import { EventForm } from "@/components/event-form";
import { walkEvents as initialEvents } from "@/lib/data";
import { WalkEvent } from "@/lib/types";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function EventsPage() {
  const { locale } = useLocale();
  const [events, setEvents] = useState<WalkEvent[]>(initialEvents);

  function handleCreateEvent(newEvent: WalkEvent) {
    setEvents((prev) => [newEvent, ...prev]);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageEvents")}</h1>
      <EventForm onCreateEvent={handleCreateEvent} />
      <div className="grid gap-3 md:grid-cols-2">
        {events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}
