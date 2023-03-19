import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Article, Content, Section } from "@/components";
import Image from "next/image";
import { client } from "@/lib/client";
import { format } from "date-fns";
import { urlFor } from "@/lib/client";
import styles from "./styles.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  const date = format(new Date(post.published_date), "dd MMM yyy");
  return (
    <>
      <Head>
        <title>{"datarav3 - " + post.meta_title}</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href={`https://datarav3.co.uk/${post.slug.current}`}
        />
      </Head>
      <section className={styles.back}>
        <button
          type="button"
          onClick={() => router.back()}
          className={styles.backButton}
        >
          <AiOutlineArrowLeft />
          <p>back</p>
        </button>
        <div className={styles.backTitle}>
          <div className={styles.backTitleHeading}>
            <div>
              <h1 className={styles.backTitle}>{post.title}</h1>
              <p className={styles.backTitleDate}>published: {date}</p>
            </div>
          </div>
        </div>
      </section>
      <Section type="two-column">
        <Image
          src={urlFor(post.image).url()}
          alt={post.image.caption}
          width="500"
          height="500"
          className={styles.postImageWidth}
        />
        <Content body={post.body} />
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
