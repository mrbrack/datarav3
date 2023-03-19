import cl from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Article = ({ children, className, backUrl }) => {
  return (
    <>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
        <p className={styles.articleBackText}>Back</p>
      </Link>
      <article className={cl(className, styles.article)}>
        <div className={styles.articleContent}>{children}</div>
      </article>
    </>
  );
};

export default Article;
