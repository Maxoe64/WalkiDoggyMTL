"use client";

import Link from "next/link";
import { users, walkEvents, walkRequests } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function DashboardPage() {
  const { locale } = useLocale();
  const currentUser = users[0];
  const myEvents = walkEvents.filter((event) => event.participantIds.includes(currentUser.id));

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageDashboard")} {currentUser.displayName} 👋</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="card"><p className="text-sm text-slate-600">{t(locale, "labelTrustScore")}</p><p className="text-2xl font-bold">{currentUser.trustScore}/5</p></div>
        <div className="card"><p className="text-sm text-slate-600">{t(locale, "labelRequests")}</p><p className="text-2xl font-bold">{walkRequests.length}</p></div>
        <div className="card"><p className="text-sm text-slate-600">{t(locale, "labelUpcomingWalks")}</p><p className="text-2xl font-bold">{myEvents.length}</p></div>
      </div>
      <div className="card">
        <h2 className="font-semibold">{t(locale, "labelNextWalks")}</h2>
        <ul className="mt-2 list-disc pl-4 text-sm">
          {myEvents.map((event) => <li key={event.id}>{event.title} · {new Date(event.startsAt).toLocaleString(locale === "fr" ? "fr-CA" : "en-CA")}</li>)}
        </ul>
        <Link href="/events" className="mt-3 inline-block text-sm font-medium text-urban-700">{t(locale, "btnManageWalks")}</Link>
      </div>
    </div>
  );
}
