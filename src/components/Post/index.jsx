import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";

const Post = ({
  className,
  thumbnail,
  title,
  description,
  slug,
  published_date,
}) => {
  const date = format(new Date(published_date), "MM/dd/yy");
  
  if (description.length > 67) {
    description = description.slice(0, 67).concat("...");
  }

  return (
    <Link
      href={`/post/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      <div className={styles.postContent}>
        <div className={styles.postContentImageContainer}>
          <Image
            src={urlFor(thumbnail).url()}
            alt={thumbnail.caption}
            width="200"
            height="200"
            className={styles.postContentImageContainerImage}
          />
        </div>
        <div className={styles.postContentDetails}>
          <p className={styles.postContentDetailsDate}>{date}</p>
          <h3 className={styles.postContentDetailsTitle}>{title}</h3>
          <p className={styles.postContentDetailsDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
