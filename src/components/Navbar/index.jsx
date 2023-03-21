import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = (className) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={cl(className, styles.header)}>
      <nav className={cl(className, styles.nav)}>
        <div>
          <Link href="/" className={cl(className, styles.logo)}>
            datarav3
          </Link>
          <h4>generative artist based in Bath, UK.</h4>
        </div>
        <div className={cl(className, styles.nav_bar_svp)}>
        <button onClick={() => {setNavbar(!navbar)}} >
          {navbar ? (
            <AiOutlineClose />
          ) : (
            <AiOutlineMenu />
          )}
        
        </button>
        </div>
        <div className={cl(className, styles.nav_bar_lvp)}>
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
      <nav className={navbar ? (cl(className, styles.nav_bar_svp_content)) : (cl(className, styles.nav_bar_svp_content_hidden))}>
      <ul className={cl(className, styles.nav_items)}>
            <li>
            <Link href="/" onClick={() => {setNavbar(!navbar)}}>
            home
            </Link>
            </li>
            <li>
            <Link href="/about" onClick={() => {setNavbar(!navbar)}}>
            about
            </Link>
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;
