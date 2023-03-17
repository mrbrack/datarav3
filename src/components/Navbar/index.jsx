import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Navbar = (className) => {
  return (
    <header className={cl(className, styles.header)}>
      <nav className={cl(className, styles.nav)}>
        <div>
          <Link href="/">
            <h1>datarav3</h1>
          </Link>
          <h3>Generative artist based in Bath, UK.</h3>
        </div>
        <div className={cl(className, styles.nav_bar)}>
          <ul className={cl(className, styles.nav_items)}>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/about">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
