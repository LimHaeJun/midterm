import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">| Home</Link> |<Link href="/about">About</Link> |
      <Link href="/Contact">Contact</Link> |<Link href="/posts"> | posts</Link>
      <Link href="/[pid]">| hello</Link>
    </div>
  );
}
