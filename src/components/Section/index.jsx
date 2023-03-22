import cl from "classnames";
import styles from "./index.module.scss";

const Section = ({ children, className, type, conditions}) => {
  if (type === "standard") {

    console.log(conditions)
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

  if (type == "two-column") {
    return (
      <section className={cl(className, styles.sectionTwoColumn)}>
        {children}
      </section>
    );
  }
};

export default Section;
