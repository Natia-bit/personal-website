import Navigation from "@/components/Navigation";
import { Sue_Ellen_Francisco, Lato } from "next/font/google";
import "./globals.css";

const sueEllenFrancisco = Sue_Ellen_Francisco({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

import layoutStyles from "./layout.module.css";

export const metadata = {
  title: "Natia Natisvili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={layoutStyles.container}>
          <aside className={layoutStyles.sidebar}>
            <Navigation />
          </aside>
          <main className={layoutStyles.main}>{children}</main>
        </div>

        <footer className={layoutStyles.footer}>
          Made with blood, sweat and tears
        </footer>
      </body>
    </html>
  );
}
