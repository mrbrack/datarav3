import { loadData } from "./api/post";
import {
  Section,
  SocialNetworks,
  PostGrid,
  Post,
  Button,
  Flexy,
} from "@/components";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>datarav3 - generative artist based in Bristol, UK.</title>
        <meta
          name="description"
          content="Generative artist, creative coder and web developer exploring the infinite possibilities of code."
        />
        <link rel="canonical" href="https://dararav3.art" />
      </Head>
      <SocialNetworks />
      <Section type="top" conditions="lvp">
      <Image
            src="/header_lvp.jpg"
            alt="generative wormhole in greyscale with a vintage television/CRT monitor aesthetic."
            width="1300"
            height="650"
            placeholder="blur"
            priority
            />
      </Section>
      <Section type="top" conditions="svp">
      <Image
            src="/header_svp.jpg"
            alt="generative wormhole in greyscale with a vintage television/CRT monitor aesthetic."
            width="1080"
            height="1350"
            placeholder="blur"
            priority
            />
      </Section>
      <Section type="standard">
        <h2>work</h2>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </PostGrid>
        {showLoadButton && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button disabled={loading} onClick={getMorePosts}>
              load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}
