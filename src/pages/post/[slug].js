import React from "react";
import { Content, Section } from "@/components";
import Image from "next/image";
import { client } from "@/lib/client";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";
import styles from "./styles.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { NextSeo } from "next-seo";

const Post = ({ post }) => {
  const router = useRouter();
  const date = format(new Date(post.published_date), "dd MMM yyy");
  return (
    <>
      <NextSeo
        title={`${post.meta_title} | datarav3:`}
        description={post.description}
        canonical={`https://www.datarav3.art/post/${post.slug.current}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: post._createdAt,
            modifiedTime: post._updatedAt,
            authors: ["https://www.datarav3.art"],
          },
          url: `https://www.datarav3.art/${post.slug.current}`,
          images: [
            {
              url: post.image
                ? `${urlFor(post.image).url()}`
                : "/assets/og/og_temp.jpg",
              width: post.image ? 1000 : 1200,
              height: post.image ? 1000 : 1200,
              alt: "featured image",
            },
          ],
          site_name: "datarav3",
        }}
      />
      <section className={styles.back}>
        <button
          type="button"
          onClick={() => router.back()}
          className={styles.backButton}
        >
          <AiOutlineArrowLeft />
          <h4 className={styles.backText}>back</h4>
        </button>
        <div className={styles.backTitle}>
          <div className={styles.backTitleHeading}>
            <div>
              <h1 className={styles.backTitle}>{post.title}</h1>
              <p className={styles.backTitleDate}>{date}</p>
            </div>
          </div>
        </div>
      </section>
      <Section type="portfolio">
        {post.image ? (
          <Image
            src={urlFor(post.image).url()}
            alt={post.image.caption}
            width="1080"
            height="1080"
            className={styles.postImageWidth}
          />
        ) : (
          <YouTube
            videoId={post.video_url}
            className="yt-embed"
            opts={{
              playerVars: {
                autoplay: 1,
                height: "1920",
                width: "1080",
              },
            }}
          />
        )}
        <Content body={post.body} />
        {
          // Used to hide/display additional post content if present. Uses .postEmptyBlock class to display: none, currently
          post.additional_body ? (
            <Content body={post.additional_body} />
          ) : (
            <div className={styles.postEmptyBlock} />
          )
        }
      </Section>
    </>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);
  return {
    props: {
      post,
    },
  };
}

export default Post;
