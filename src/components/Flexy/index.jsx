import styles from "./index.module.scss";
import cl from "classnames";

const Flexy = ({ className, children }) => {
  return (<div className={cl(className, styles.flexy50Rows)}>{children}</div>);
};

export default Flexy;
