import React from "react";
import { BlogHeader, BlogContent } from "@/components";
import { client } from "@/lib/client";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";
import styles from "./styles.module.scss";
import cl from "classnames";
import { NextSeo } from "next-seo";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

const Blog = ({ blog }) => {
  return (
    <>
      <NextSeo
        title={`${blog.meta_title} | datarav3`}
        description={blog.description}
        canonical={`https://www.datarav3.art/blog/${blog.slug.current}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: blog._createdAt,
            modifiedTime: blog._updatedAt,
            authors: ["https://www.datarav3.art"],
          },
          url: `https://www.datarav3.art/${blog.slug.current}`,
          images: [
            {
              url: blog.featured_image
                ? `${urlFor(blog.featured_image).url()}`
                : "/assets/og/og_temp.jpg",
              width: blog.image ? 1000 : 1200,
              height: blog.image ? 1000 : 1200,
              alt: "featured image",
            },
          ],
          site_name: "datarav3",
        }}
      />
      <BlogHeader {...blog} />
      <nav className={styles.socialShare}>
        <p>share: </p>
        <EmailShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
          subject={"Check this out"}
          body="body"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <PinterestShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </nav>
      <BlogContent body={blog.body} className={styles.content} />
      <nav className={styles.socialShare}>
        <p>share: </p>
        <EmailShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
          subject={"Check this out"}
          body="body"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <PinterestShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton
          url={`https://www.datarav3.art/${blog.slug.current}`}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </nav>
    </>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "blog"] {
        slug {
            current
        }
    }`;

  const blog = await client.fetch(query);
  const paths = blog.map((b) => ({
    params: {
      slug: b.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;

  const blog = await client.fetch(query);

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
