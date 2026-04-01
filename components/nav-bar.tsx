import Link from "next/link";

const links = [
  ["/", "Accueil"],
  ["/dashboard", "Tableau de bord"],
  ["/companions", "Compagnons"],
  ["/routes", "Circuits"],
  ["/events", "Marches"]
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold text-urban-700">DoggyWalkiMTL</Link>
        <div className="flex gap-3 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="rounded-full px-3 py-1 hover:bg-slate-100">
              {label}
            </Link>
          ))}
          <Link href="/auth" className="rounded-full bg-urban-500 px-3 py-1 text-white">Connexion</Link>
        </div>
      </nav>
    </header>
  );
}
