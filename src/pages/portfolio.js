import { Section, PostGrid, Post, Button } from "@/components";
import { useState } from "react";
import { loadData } from "./api/post";
import {NextSeo} from 'next-seo';

const LOAD_MORE_STEP = 4; // controls how many initial posts are shown

const Work = ({ initialPosts, total }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadButton = total > loadedAmount; // will show a load more button if total number of posts is more than initial amount

  const getMorePosts = async () => { // queries x (LOAD_MORE_STEP) amount of posts that come after the initial posts
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
      <NextSeo
            title="portfolio | datarav3: creative technology and generative art"
            description="Explore my portfolio of work spanning generative art, creative technology, audio and workshops"
            canonical="https://www.datarav3.art/portfolio"
      />
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
  const { posts, total } = await loadData(0, LOAD_MORE_STEP); // loads an initial amount of posts imto props
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}

export default Work;
