import { loadData } from "./api/post";
import { Section, SocialNetworks, PostGrid, Post, Button } from "@/components";
import { useState } from "react";
import Head from "next/head";

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
        <link rel="canonical" href="https://dararav3.co.uk" />
      </Head>
      <SocialNetworks />
      <Section type="standard" conditions="lvp">
        <video width="1300" height="650" className="header-video" autoPlay playsInline muted loop>
        <source src="/planet_header_lvp.mp4" type="video/mp4" />
        <source src="/planet_header_lvp.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Section>
      <Section type="standard" conditions="svp">
        <video width="1080" height="1920" className="header-video" autoPlay playsInline muted loop>
        <source src="/planet_header_svp.mp4" type="video/mp4" />
        <source src="/planet_header_svp.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
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
