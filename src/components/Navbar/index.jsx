import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = (className) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={cl(className, styles.header)}>
      <nav className={cl(className, styles.nav)}>
        <div>
          <Link href="/" className={cl(className, styles.logo)}>
            datarav3
          </Link>
          <h1 className="h4">generative artist - Bristol, UK.</h1>
        </div>
        <div className={cl(className, styles.nav_bar_svp)}>
          <button
            onClick={() => {
              setNavbar(!navbar);
            }}
            style={{ color: "#FF99CF" }}
          >
            {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className={cl(className, styles.nav_bar_lvp)}>
          <ul className={cl(className, styles.nav_items)}>
            <li>
              <Link
                href="/"
                className={
                  currentRoute === "/"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  currentRoute === "/about"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={
                  currentRoute === "/work"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  currentRoute === "/contact"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={
          navbar
            ? cl(className, styles.nav_bar_svp_content)
            : cl(className, styles.nav_bar_svp_content_hidden)
        }
      >
        <ul className={cl(className, styles.nav_items)}>
          <li>
            <Link
              href="/"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
