import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Footer = (className) => {
  return (
    <footer className={cl(className, styles.footer)}>
      <small>&copy; copyright 2023, datarav3. all rights reserved. bristol, uk.</small>
    </footer>
  );
};

export default Footer;
