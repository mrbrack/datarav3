import { Section, PostGrid, Post, Button } from "@/components";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { loadData } from "./api/post";

const LOAD_MORE_STEP = 8;

const Work = ({ initialPosts, total }) => {
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
    <>
      <Head>
        <title>
          datarav3 - portfolio - generative artist based in Bristol, UK.
        </title>
        <meta
          name="description"
          content="datarav3 (Nigel Fryatt) is a generative artist who uses creative programming to explore the intersection between technology and human emotion."
        />
        <link rel="canonical" href="https://dararav3.art/about" />
      </Head>
      <Section type="header-page" img="/home_back.png" alt="hundres of purple, green and blue dots styled in the shape of a wave">
        portfolio
      </Section>
      <Section type="standard">
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
    </>
  );
};

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}

export default Work;
