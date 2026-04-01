"use client";

import Link from "next/link";
import { pets, users } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function ProfilePage() {
  const { locale } = useLocale();
  const user = users[0];
  const pet = pets.find((candidate) => candidate.ownerId === user.id);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageProfile")}</h1>
      <div className="card space-y-2">
        <p><strong>{t(locale, "profileName")}:</strong> {user.displayName}</p>
        <p><strong>{t(locale, "profileSector")}:</strong> {user.boroughName}</p>
        <p><strong>{t(locale, "profileLanguage")}:</strong> {user.language}</p>
        <p><strong>{t(locale, "profileAvailability")}:</strong> {user.availability}</p>
        <p><strong>{t(locale, "profileActivityLevel")}:</strong> {user.activityLevel}</p>
        <p><strong>{t(locale, "profileWalkPreference")}:</strong> {user.walkPreference}</p>
      </div>
      {pet ? <Link href={`/pets/${pet.id}`} className="inline-block rounded-full bg-urban-500 px-4 py-2 text-white">{t(locale, "profileViewPet")} {pet.name}</Link> : null}
    </div>
  );
}
