import styles from "./IntroSidebar.module.css";
import Link from "next/link";

export default function Sidenavbar() {
  const pids = ["index", "tab2"];
  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideBar}>
        {pids.map((pid) => (
          <Link href="/posts/intro/[pid]" as={`/posts/intro/${pid}`}>
            <a>{pid}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
