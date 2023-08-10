import { loadData } from "./api/post";
import { loadBlogData } from "./api/blog";
import {
  Section,
  PostGrid,
  Post,
  Button,
} from "@/components";
import { useState } from "react";

const LOAD_MORE_STEP = 4; // controls how many initial art posts are shown
const LOAD_MORE_BLOG_STEP = 4; // controls how many initial blog posts are shown

export default function Home({ initialPosts, total, initialBlogPosts, blogTotal }) {

  /* Art posts */

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

  /* Blog posts */

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [loadedBlogAmount, setLoadedBlogAmount] = useState(LOAD_MORE_BLOG_STEP);
  const [blogLoading, setBlogLoading] = useState(false);

  const showBlogLoadButton = blogTotal > loadedBlogAmount; // will show a load more button if total number of posts is more than initial amount

  const getMoreBlogPosts = async () => { // queries x (LOAD_MORE_STEP) amount of posts that come after the initial posts
    setBlogLoading(true);
    try {
      const blogData = await fetch(
        `api/blog?start=${loadedBlogAmount}&end=${loadedBlogAmount + LOAD_MORE_BLOG_STEP}`
      ).then((response) => response.json());
      setLoadedBlogAmount(loadedBlogAmount + LOAD_MORE_BLOG_STEP);
      setPosts([...blogPosts, ...blogData.blogPosts]);
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
            }}
          >
            <Button disabled={loading} onClick={getMorePosts} type="standard">
              load more posts...
            </Button>
          </div>
        )}
      </Section>
      {/*<}Section type="standard" title="blog" titleType="h2Top">
        <PostGrid>
          {blogPosts.map((blogPost) => (
            <Post key={blogPost._id} {...blogPost} />
          ))}
        </PostGrid>
        {showBlogLoadButton && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem"
            }}
          >
            <Button disabled={loading} onClick={getMoreBlogPosts}>
              load more posts...
            </Button>
          </div>
        )}
          </Section>*/}
    </div>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);
  const { blogPosts, blogTotal } = await loadBlogData(0, LOAD_MORE_STEP);
  return {
    props: {
      initialPosts: posts,
      total,
      initialBlogPosts: blogPosts,
      blogTotal,
    },
  };
}
