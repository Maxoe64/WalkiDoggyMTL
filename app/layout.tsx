import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { LocaleProvider } from "@/lib/locale-context";

export const metadata = {
  title: "DoggyWalkiMTL",
  description: "Plateforme montréalaise pour promener son chien et rencontrer la communauté locale."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LocaleProvider>
          <NavBar />
          <main className="mx-auto max-w-6xl p-4">{children}</main>
        </LocaleProvider>
      </body>
    </html>
  );
}
