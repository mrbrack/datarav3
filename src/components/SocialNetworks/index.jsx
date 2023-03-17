import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";
import ScreenEgg from "../ScreenEgg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const socialNetwork = [
  {
    id: 1,
    href: "https://www.instagram.com/datarav3",
    icon: AiOutlineInstagram,
  },
  {
    id: 2,
    href: "https://twitter.com/datarav3",
    icon: AiOutlineTwitter,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetwork.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <Link
              href={socialNetwork.href}
              target="_blank"
              className={styles.listLink}
            >
              {React.createElement(socialNetwork.icon, {
                color: "black",
                size: 50,
              })}
            </Link>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
