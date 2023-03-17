import React from "react";
import Head from "next/head";
import { Article, Title, Content } from "@/components";
import Image from "next/image";
import { client } from "@/lib/client";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";
import styles from "./styles.module.scss";

const Post = ({ post }) => {
  const date = format(new Date(post.published_date), "dd MMM yyy");

  return (
    <Article backUrl="/" className={styles.post}>
      <Head>
        <title>datarav3 - {post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>{post.title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Image
        src={urlFor(post.image).url()}
        alt={post.image.caption}
        width="500"
        height="500"
        className={styles.postImageWidth}
      />
      <Content body={post.body} />
    </Article>
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
