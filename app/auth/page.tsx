"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

const authSchema = z.object({
  email: z.string().email("Adresse courriel invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export default function AuthPage() {
  const { locale } = useLocale();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);

    const result = authSchema.safeParse({ email, password });
    if (!result.success) {
      setErrors(result.error.errors.map((err) => err.message));
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/dashboard"), 1500);
  }

  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">{t(locale, "pageAuth")}</h1>
      <form onSubmit={handleSubmit} className="card space-y-3">
        <label className="block text-sm font-medium">{t(locale, "authEmail")}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border p-2"
          />
        </label>
        <label className="block text-sm font-medium">{t(locale, "authPassword")}
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border p-2"
          />
        </label>
        {errors.length > 0 && (
          <div className="text-sm text-red-600">
            {errors.map((err, i) => <p key={i}>{err}</p>)}
          </div>
        )}
        {success && (
          <p className="text-sm text-green-600">{t(locale, "authSuccess")}</p>
        )}
        <button type="submit" className="w-full rounded-xl bg-urban-500 py-2 font-medium text-white">
          {t(locale, "btnContinue")}
        </button>
        <p className="text-xs text-slate-600">{t(locale, "authMvpNote")}</p>
      </form>
    </div>
  );
}
