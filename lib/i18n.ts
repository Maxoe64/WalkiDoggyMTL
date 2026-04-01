import { Locale } from "./types";

export const dictionaries = {
  fr: {
    appTagline: "Plateforme montréalaise de marche canine",
    heroCtaPrimary: "Trouver des compagnons",
    heroCtaSecondary: "Voir les circuits"
  },
  en: {
    appTagline: "Montreal dog walking community platform",
    heroCtaPrimary: "Find companions",
    heroCtaSecondary: "Browse routes"
  }
} as const;

export function t(locale: Locale, key: keyof (typeof dictionaries)["fr"]) {
  return dictionaries[locale][key] ?? dictionaries.fr[key];
}
