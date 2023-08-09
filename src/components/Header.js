"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const urlPathName = usePathname();

  const isLinkActive = (pathname) => {
    return urlPathName === pathname ? styles.activeLink : "";
  };

  return (
    <header className={styles.headerStyle}>
      <Link href="/">
        <Image
          src="/movie-finder.png"
          alt="Logo"
          width={400}
          height={40}
          layout={"responsive"}
        />
      </Link>

      <div className={`${styles.linksContainerStyle} secondaryText`}>
        <Link href="/" className={`${styles.linkStyle} ${isLinkActive("/")}`}>
          Accueil
        </Link>
        |
        <Link
          href="/search"
          className={`${styles.linkStyle} ${isLinkActive("/search")}`}
        >
          Recherche
        </Link>
      </div>
    </header>
  );
};

export default Header;
