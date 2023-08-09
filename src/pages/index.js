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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Section type="headerAnimated" img="/home_back.png" alt="hundres of purple, green and blue dots styled in the shape of a wave">
        creative tech & generative art
      </Section>
      <Section type="standard" title="lastest work" titleType="h2Top">
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
              marginTop: "1.5rem"
            }}
          >
            <Button disabled={loading} onClick={getMorePosts}>
              {loading ? "loading" :
              "load more posts..."
              }
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
