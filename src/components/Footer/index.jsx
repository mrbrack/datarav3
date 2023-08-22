import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";

const Footer = (className) => {
  return (
    <footer className={cl(className, styles.footer)}>
      <div>
        <small>&copy; copyright 2023, datarav3. all rights reserved.</small>
        <small>
          <Link href="/terms" style={{ color: "rgb(245, 245, 245)" }}>
            {" "}
            terms and conditions.{" "}
          </Link>
          <Link href="/privacy-policy" style={{ color: "rgb(245, 245, 245)" }}>
            {" "}
            privacy policy.{" "}
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
