import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Footer = (className) => {
  return (
    <footer className={cl(className, styles.footer)}>
      <p></p>&copy; Copyright 2023, datarav3. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
