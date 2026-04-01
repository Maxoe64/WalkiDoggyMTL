export default function AuthPage() {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Connexion / Inscription</h1>
      <form className="card space-y-3">
        <label className="block text-sm font-medium">Courriel
          <input type="email" required className="mt-1 w-full rounded-xl border p-2" />
        </label>
        <label className="block text-sm font-medium">Mot de passe
          <input type="password" required minLength={8} className="mt-1 w-full rounded-xl border p-2" />
        </label>
        <button className="w-full rounded-xl bg-urban-500 py-2 font-medium text-white">Continuer</button>
        <p className="text-xs text-slate-600">MVP: brancher NextAuth (credentials/email magic link) dans l'itération suivante.</p>
      </form>
    </div>
  );
}
