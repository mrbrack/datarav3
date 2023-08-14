import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";

const BlogPost = ({
  className,
  featured_image,
  header_image,
  title,
  description,
  slug,
  published_date,
}) => {
  const date = format(new Date(published_date), "dd/MM/yy");
  
  if (description.length > 300) {
    description = description.slice(0, 67).concat("...");
  }

  return (
    <Link
      href={`/blog/${encodeURIComponent(slug.current)}`}
      className={cl(className, styles.post)}
    >
      <div className={styles.postContent}>
        <div className={styles.postContentImageContainer}>
          <Image
            src={urlFor(header_image).url()}
            alt={header_image.caption}
            width="400"
            height="400"
            className={styles.postContentImageContainerImage}
          />
        </div>
        <div className={styles.postContentDetails}>
          <h3 className={styles.postContentDetailsTitle}>{title}</h3>
          <p className={styles.postContentDetailsDescription}>{description}</p>
          <p className={styles.postContentDetailsDate}>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
