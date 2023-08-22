import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import { format } from "date-fns";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa6";

// All social profiles
const socialNetwork = [
  {
    id: 1,
    href: "https://editor.p5js.org/datarav3/sketches",
    icon: FaStarOfLife,
  },
  {
    id: 2,
    href: "https://github.com/mrbrack",
    icon: AiOutlineGithub,
  },
  {
    id: 3,
    href: "https://www.instagram.com/datarav3",
    icon: AiOutlineInstagram,
  },
  {
    id: 4,
    href: "https://twitter.com/datarav3",
    icon: AiOutlineTwitter,
  },
];

const BlogHeader = ({ title, header_image, excerpt, published_date }) => {
  const date = format(new Date(published_date), "dd/MM/yy");
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerDetails}>
          <h1>{title}</h1>
          <p>{excerpt}</p>
          <div className={styles.headerContainerDetailsMeta}>
            <Image
              src="/profile_transparent.png"
              alt="headshot of Nigel Fryatt wearing a grey shirt against a lime green background"
              width="400"
              height="400"
              className={styles.headerContainerDetailsMetaImage}
            />
            <div className={styles.headerContainerDetailsMetaText}>
              <p className={styles.headerContainerDetailsMetaTextName}>
                Nigel Fryatt
              </p>
              <p className={styles.headerContainerDetailsMetaTextDate}>
                {date}
              </p>
            </div>
            <div>
              <ul className={styles.headerContainerDetailsMetaTextSocials}>
                {socialNetwork.map((socialNetwork) => (
                  <li
                    key={socialNetwork.id}
                    style={{ marginLeft: "0", marginRight: ".425rem" }}
                  >
                    <Link href={socialNetwork.href} target="_blank">
                      {React.createElement(socialNetwork.icon, {
                        color: "white",
                        size: 20,
                      })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image
          src={urlFor(header_image).url()}
          alt={header_image.caption}
          width="400"
          height="400"
          className={styles.headerContainerImage}
          priority
        />
      </div>
    </header>
  );
};

export default BlogHeader;
