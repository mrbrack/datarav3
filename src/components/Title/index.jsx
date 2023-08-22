import cl from "classnames";
import styles from "./index.module.scss";

const Title = ({ className, title, titleTag }) => {
  if (titleTag === "h2") {
    return <h2 className={cl(className, styles.title)}>{title}</h2>;
  }

  if (titleTag === "h2Top") {
    return <h2 className={cl(className, styles.titleTop)}>{title}</h2>;
  }

  if (titleTag === "h1") {
    return <h1 className={cl(className, styles.title)}>{title}</h1>;
  }

  if (titleTag === "h1Top") {
    return <h1 className={cl(className, styles.titleTop)}>{title}</h1>;
  }

  if (titleTag === "h1Bottom") {
    return <h1 className={cl(className, styles.titleBottom)}>{title}</h1>;
  }
};

export default Title;
