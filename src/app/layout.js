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

import styles from "./layout.module.css";

export const metadata = {
  title: "Natia Natisvili",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <aside className={styles.sidebar}>
              <Navigation />
            </aside>
            <main className={styles.main}>{children}</main>
          </div>

          <footer className={styles.footer}>
            Made with bugs, sweat and tears
          </footer>
        </div>
      </body>
    </html>
  );
}
