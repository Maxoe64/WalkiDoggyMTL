"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-md space-y-4 py-12 text-center">
      <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
      <p className="text-slate-600">Quelque chose s&apos;est mal passé. Veuillez réessayer.</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-urban-500 px-4 py-2 text-white"
      >
        Réessayer
      </button>
    </div>
  );
}
