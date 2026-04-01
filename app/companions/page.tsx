"use client";

import { useState } from "react";
import { CompanionCard } from "@/components/companion-card";
import { users, pets, boroughs } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function CompanionsPage() {
  const { locale } = useLocale();
  const [borough, setBorough] = useState("all");
  const [petSize, setPetSize] = useState("all");
  const [energy, setEnergy] = useState("all");
  const [walkType, setWalkType] = useState("all");

  const filtered = users.filter((user) => {
    if (borough !== "all" && user.boroughId !== borough) return false;
    if (walkType !== "all" && user.walkPreference !== walkType) return false;

    const pet = pets.find((p) => p.ownerId === user.id);
    if (petSize !== "all" && pet?.size !== petSize) return false;
    if (energy !== "all" && pet?.energyLevel !== energy) return false;

    return true;
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageCompanions")}</h1>
      <div className="card grid gap-2 md:grid-cols-4">
        <select value={borough} onChange={(e) => setBorough(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterBorough")}</option>
          {boroughs.map((b) => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </select>
        <select value={petSize} onChange={(e) => setPetSize(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterPetSize")}</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterEnergyLevel")}</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <select value={walkType} onChange={(e) => setWalkType(e.target.value)} className="rounded-xl border p-2">
          <option value="all">{t(locale, "filterWalkType")}</option>
          <option value="courte">courte</option>
          <option value="moyenne">moyenne</option>
          <option value="longue">longue</option>
        </select>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((user) => <CompanionCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
