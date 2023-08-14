import cl from "classnames";
import styles from "./index.module.scss";
import PortableText from "@sanity/block-content-to-react";
import { clientConfig } from "@/lib/client";

const serializers = {
  marks: {
    link: ({children, mark}) => mark.blank ? 
    <a href={mark.href} target="blank" rel="noopener noreferer">{children}</a>
    : <a href={mark.href}>{children}</a>
  }
}

const Content = ({ body, className }) => {
  return (
    <div className={cl(className, styles.contentWrapper)}>
      <PortableText
        blocks={body}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
        serializers={serializers}
        className={cl(className, styles.contentWrapperContent)}
      />
    </div>
  );
};

export default Content;
