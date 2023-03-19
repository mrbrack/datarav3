import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Footer = (className) => {
  return (
    <footer className={cl(className, styles.footer)}>
      <small>&copy; Copyright 2023, datarav3. All Rights Reserved.</small>
    </footer>
  );
};

export default Footer;
