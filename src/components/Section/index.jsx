import cl from "classnames";
import styles from "./index.module.scss";

const Section = ({ children, className, type}) => {
  if (type === "standard") {
    return (
      <section className={cl(className, styles.sectionStandard)}>
        {children}
      </section>
    );
  }

  if (type == "two-column") {
    return (
      <section className={cl(className, styles.sectionTwoColumn)}>
        {children}
      </section>
    );
  }
};

export default Section;
