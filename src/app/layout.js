import Navigation from "@/components/layout/Navigation";
import "./globals.css";
import Bug from "@/components/common/Bug";

import styles from "./layout.module.css";
import Footer from "@/components/layout/Footer";

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

          <Footer />
        </div>
      </body>
    </html>
  );
}
