import { Section, PostGrid, BlogPost, Button } from "@/components";
import { useState } from "react";
import { loadBlogData } from "./api/blog";
import {NextSeo} from 'next-seo';
import Link from "next/link";

const LOAD_MORE_BLOG_STEP = 10; // controls how many initial posts are shown

const Blog = ({ initialBlogPosts, blogTotal }) => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [loadedBlogAmount, setLoadedBlogAmount] = useState(LOAD_MORE_BLOG_STEP);

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
    <>
      <NextSeo
            title="blog | datarav3: creative technology and generative art"
            description="Discussing generative art, creative technology, audio, workshops and more."
            canonical="https://www.datarav3.art/blog"
      />
      <Section type="header-page" img="/home_back.png" alt="hundres of purple, green and blue dots styled in the shape of a wave">
        blog
      </Section>
      <Section type="standard">
        <PostGrid type="blog">
          {blogPosts.map((blog) => (
            <BlogPost key={blog._id} {...blog} />
          ))}
        </PostGrid>
      </Section>
    </>
  );
};

export async function getServerSideProps() {
  const { blogPosts, blogTotal } = await loadBlogData(0, LOAD_MORE_BLOG_STEP);
  return {
    props: {
      initialBlogPosts: blogPosts,
      blogTotal,
    },
  };
}

export default Blog;
