"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export function NavBar() {
  const { locale, setLocale } = useLocale();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold text-urban-700">DoggyWalkiMTL</Link>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/" className="rounded-full px-3 py-1 hover:bg-slate-100">{t(locale, "navHome")}</Link>
          <Link href="/dashboard" className="rounded-full px-3 py-1 hover:bg-slate-100">{t(locale, "navDashboard")}</Link>
          <Link href="/companions" className="rounded-full px-3 py-1 hover:bg-slate-100">{t(locale, "navCompanions")}</Link>
          <Link href="/routes" className="rounded-full px-3 py-1 hover:bg-slate-100">{t(locale, "navRoutes")}</Link>
          <Link href="/events" className="rounded-full px-3 py-1 hover:bg-slate-100">{t(locale, "navEvents")}</Link>
          <Link href="/auth" className="rounded-full bg-urban-500 px-3 py-1 text-white">
            {t(locale, "navLogin")}
          </Link>
          <button
            onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
            className="rounded-full border border-slate-300 px-2 py-1 text-xs font-medium hover:bg-slate-100"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </nav>
    </header>
  );
}
