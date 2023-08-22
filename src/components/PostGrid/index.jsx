import cl from "classnames";
import styles from "./index.module.scss";

const PostGrid = ({ className, children, type }) => {
  if (type === "post") {
    return <div className={cl(className, styles.postGridPost)}>{children}</div>;
  }

  if (type === "blog") {
    return <div className={cl(className, styles.postGridBlog)}>{children}</div>;
  }
};

export default PostGrid;
