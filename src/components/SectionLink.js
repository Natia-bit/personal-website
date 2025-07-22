import Link from "next/link";
import Image from "next/image";
import styles from "./SectionLink.module.css";

export default function SectionLink({ href, iconSrc, label }) {
  return (
    <Link href={href} className={styles.sectionLink}>
      <div className={styles.sectionLink}>
        <Image src={iconSrc} alt={`${label} icon`} width={96} height={96} />
        <span className={styles.label}>{label}</span>
      </div>
    </Link>
  );
}
