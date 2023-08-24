import cl from "classnames";
import styles from "./index.module.scss";
import PortableText from "@sanity/block-content-to-react";
import { clientConfig } from "@/lib/client";

const serializers = {
  types: {
    inlineAudio: ({ node }) => {
      const { _ref: ref } = node.asset;
      const assetRefParts = ref.split("-");
      const id = assetRefParts[1];
      const format = assetRefParts[2];
      const assetUrl = `https://cdn.sanity.io/files/${clientConfig.projectId}/${clientConfig.dataset}/${id}.${format}`;

      return (
        <audio controls>
          <source src={assetUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
    },
  },
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="blank" rel="noopener noreferer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
    code: ({ children, mark }) => (
      <pre>
        <code>{mark.code}</code>
      </pre>
    ),
  },
};

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
