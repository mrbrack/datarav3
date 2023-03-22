import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
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
            width="200"
            height="200"
            className={styles.postImageWidth}
          />
        </div>
        <div className={styles.postDetails}>
          <h3 className={styles.postTitle}>{title}</h3>
          <p className={styles.postDescription}>{description}</p>
          <p>{published_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
