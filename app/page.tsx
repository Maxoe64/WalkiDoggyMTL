"use client";

import Link from "next/link";
import { routes } from "@/lib/data";
import { RouteCard } from "@/components/route-card";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <div className="space-y-8">
      <section className="card bg-gradient-to-r from-urban-50 to-white">
        <h1 className="text-3xl font-bold">DoggyWalkiMTL</h1>
        <p className="mt-2 max-w-2xl text-slate-700">
          {t(locale, "appTagline")}
        </p>
        <div className="mt-4 flex gap-2">
          <Link href="/companions" className="rounded-full bg-pine-500 px-4 py-2 text-white">
            {t(locale, "heroCtaPrimary")}
          </Link>
          <Link href="/routes" className="rounded-full border border-slate-300 px-4 py-2">
            {t(locale, "heroCtaSecondary")}
          </Link>
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">{t(locale, "popularRoutes")}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {routes.slice(0, 4).map((route) => <RouteCard key={route.id} route={route} />)}
        </div>
      </section>
    </div>
  );
}
