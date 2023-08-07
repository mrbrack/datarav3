import cl from "classnames";
import styles from "./index.module.scss";
import Image from "next/image";
import {
  Title
} from "@/components";

const Section = ({ children, className, type, title, titleType, img, alt}) => {

  if (type === "headerAnimated") {
      return (
        <section className={cl(className, styles.sectionHeaderAnimated)}>
        <h1 className={cl(className, styles.sectionHeaderAnimatedHeading)}> 
        {children}
        </h1>
        <style jsx>{`
          section {background-image: url(${img})};
      `}</style>
        </section>
      );
  }

  if (type === "header-page") {
    return (
      <section className={cl(className, styles.sectionHeaderPage)}>
      <h1 className={cl(className, styles.sectionHeaderPageHeading)}> 
      {children}
      </h1>
      <style jsx>{`
        section {background-image: url(${img})};
    `}</style>
      </section>
    );
}


  if (type === "standard") {
    if(title) {
      return (
        <div className={cl(className, styles.sectionStandardOuter)}>
        <Title type="standard" title={title} titleTag={titleType}/>
        <section className={cl(className, styles.sectionStandardTitle)}>
          {children}
        </section>
        </div>
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
    if(title) {
      return (
        <section className={cl(className, styles.sectionTop)}>
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
    if(title) {
      return (
        <section className={cl(className, styles.sectionTopTitle)}>
          {children}
        </section>
      ); 
    } else {
    return (
      <section className={cl(className, styles.sectionTwoColumnTop)}>
        {children}
      </section>
    );
    }
  }

  if (type === "two-column-top") {
    if(title) {
      return (
        <>
        <Title type="standard" title={title} titleTag={titleType}/>
        <section className={cl(className, styles.sectionTwoColumnTop)}>
          {children}
        </section>
        </>
      ); 
    } else {
    return (
      <section className={cl(className, styles.sectionTwoColumnTop)}>
        {children}
      </section>
    );
  }
}
};

export default Section;
