import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa6";
import { useRouter } from "next/router";

// All social profiles
const socialNetwork = [
  {
    id: 1,
    href: "https://github.com/mrbrack",
    icon: AiOutlineGithub,
  },
  {
    id: 2,
    href: "https://www.instagram.com/datarav3",
    icon: AiOutlineInstagram,
  },
  {
    id: 3,
    href: "https://twitter.com/datarav3",
    icon: AiOutlineTwitter,
  },
];

const Navbar = (className) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={cl(className, styles.header)}>
      <nav className={cl(className, styles.nav)}>
        <Link href="/" className={cl(className, styles.logo)}>
          <img src="/assets/logodatarav3.png" class="logo" />
        </Link>
        <div className={cl(className, styles.nav_bar_svp)}>
          <button
            onClick={() => {
              setNavbar(!navbar);
            }}
            style={{ color: "#252525" }}
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
                href="/portfolio"
                className={
                  currentRoute === "/portfolio"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={
                  currentRoute === "/blog"
                    ? styles.nav_bar_lvp_active
                    : styles.nav_bar_lvp_not_active
                }
              >
                blog
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
            {socialNetwork.map((socialNetwork) => (
              <li
                key={socialNetwork.id}
                style={{ marginLeft: "0", marginRight: ".425rem" }}
              >
                <Link href={socialNetwork.href} target="_blank">
                  {React.createElement(socialNetwork.icon, {
                    color: "black",
                    size: 22.5,
                  })}
                  <p
                    style={{
                      marginLeft: ".25rem",
                    }}
                  >
                    {socialNetwork.text && `${socialNetwork.text}`}
                  </p>
                </Link>
              </li>
            ))}
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
              href="/portfolio"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => {
                setNavbar(!navbar);
              }}
            >
              blog
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
        <ul className={cl(className, styles.nav_items_socials)}>
          {socialNetwork.map((socialNetwork) => (
            <li key={socialNetwork.id} className={styles.social_item}>
              <Link
                href={socialNetwork.href}
                target="_blank"
                className={styles.listLink}
              >
                {React.createElement(socialNetwork.icon, {
                  color: "black",
                  size: 25,
                })}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
