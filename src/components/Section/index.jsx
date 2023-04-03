import cl from "classnames";
import styles from "./index.module.scss";

const Section = ({ children, className, type, conditions}) => {
  if (type === "standard") {
    if(conditions) {
      return (
        <section className={cl(className, styles.sectionStandard, conditions)}>
          {children}
        </section>
      ); 
    } else {
      return (
        <section className={cl(className, styles.sectionStandard)}>
          {children}
        </section>
      );
    }
  }

  if (type === "top") {

    if(conditions) {
      return (
        <section className={cl(className, styles.sectionTop, conditions)}>
          {children}
        </section>
      ); 
    } else {
      return (
        <section className={cl(className, styles.sectionTop)}>
          {children}
        </section>
      );
    }
  }

  if (type === "two-column") {
    return (
      <section className={cl(className, styles.sectionTwoColumnTop)}>
        {children}
      </section>
    );
  }

  if (type === "two-column-top") {
    return (
      <section className={cl(className, styles.sectionTwoColumnTop)}>
        {children}
      </section>
    );
  }
};

export default Section;
