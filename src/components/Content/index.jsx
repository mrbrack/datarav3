import cl from "classnames";
import styles from "./index.module.scss";
import BlockContent from "@sanity/block-content-to-react";
import { clientConfig } from "@/lib/client";

const Content = ({ body, className }) => {
  return (
    <div className={cl(className, styles.content)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1300, h: 1000, fit: "stretch" }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
