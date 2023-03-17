import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components";
import styles from "./index.module.scss";
import { urlFor } from "@/lib/client";

const Post = ({
  className,
  image,
  title,
  description,
  slug,
  published_date,
}) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      <div className={styles.postContent}>
        <div className={styles.postImage}>
          <Image
            src={urlFor(image).url()}
            alt={image.caption}
            width="175"
            height="175"
            className={styles.postImageWidth}
          />
        </div>
        <div className={styles.postDetails}>
          <Title type="small">{title}</Title>
          <p>{description}</p>
          <p>{published_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
