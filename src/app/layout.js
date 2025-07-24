import Navigation from "@/components/Navigation";
import "./globals.css";
import Image from "next/image";
import Bug from "@/components/Bug";

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

          <footer>
            {/* <span className={styles.botlLeft}>
              <Image
                src="/footer/nut.png"
                alt="nut"
                width={18}
                height={18}
              ></Image>
            </span> */}
            Made with bugs
            <span className={styles.bugOne}>
              <Bug outline="#FFFFFF" />
            </span>
            <span className={styles.bugTwo}>
              <Bug outline="#FFFFFF" />
            </span>
            sweat, and tears{" "}
            {/* <span className={styles.boltRight}>
              <Image
                src="/footer/nut.png"
                alt="nut"
                width={18}
                height={18}
              ></Image>
            </span> */}
          </footer>
        </div>
      </body>
    </html>
  );
}
