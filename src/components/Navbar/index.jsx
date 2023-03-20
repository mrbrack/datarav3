import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Navbar = (className) => {
  return (
    <header className={cl(className, styles.header)}>
      <nav className={cl(className, styles.nav)}>
        <div>
          <Link href="/" className={cl(className, styles.logo)}>
            datarav3
          </Link>
          <h4>generative artist based in Bath, UK.</h4>
        </div>
        <div className={cl(className, styles.nav_bar)}>
          <ul className={cl(className, styles.nav_items)}>
            <li>
            <Link href="/">
            home
            </Link>
            </li>
            <li>
            <Link href="/about">
            about
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
