import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar({ list }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>

      <ul className={styles.navList}>
        {list.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <Link href={item.link} className={styles.navLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
