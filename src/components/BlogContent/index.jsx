import cl from "classnames";
import styles from "./index.module.scss";
import PortableText from "@sanity/block-content-to-react";
import { clientConfig } from "@/lib/client";

const CustomContainer = ({ children }) => {
  return <div>{children}</div>;
};

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
    block: (props) => {
      const { style = "normal" } = props.node;

      if (style === "h1") {
        return <h1>{props.children}</h1>;
      }

      if (style === "h2") {
        return <h2>{props.children}</h2>;
      }

      if (style === "h3") {
        return <h3>{props.children}</h3>;
      }

      if (style === "h4") {
        return <h4>{props.children}</h4>;
      }

      if (style === "h5") {
        return <h5>{props.children}</h5>;
      }

      if (style === "h6") {
        return <h6>{props.children}</h6>;
      }

      if (style === "blockquote") {
        return props.children;
      }

      return <p>{props.children}</p>;
    },
    code: (props) => {
      const data = props.node.code;
      return (
        <pre>
          <code>{data}</code>
        </pre>
      );
    },
  },
  marks: {
    link: ({ children, mark }) =>
      mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
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
        renderContainerOnSingleChild={true}
      />
    </div>
  );
};

export default Content;
