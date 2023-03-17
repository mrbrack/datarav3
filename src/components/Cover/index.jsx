import cl from "classnames";
import styles from "./index.module.scss";

const Cover = ({ className, title, subTitle }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </div>
  );
};

export default Cover;
