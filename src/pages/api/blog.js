import { client } from "../../lib/client";

export default async function post(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const { posts, total } = await loadData(start, end);

  res.status(200).json({
    posts,
    total,
  });
}

export async function loadBlogData(start, end) {
  const query = `{
    "blogPosts": *[_type == "blog"] | order(published_date desc) [${start}...${end}] {_id, published_date, title, slug, description, featured_image, header_image, video_url},
    "blogTotal": count(*[_type == "blog"])
  }`;

  const { blogPosts, blogTotal } = await client.fetch(query);
  return {
    blogPosts,
    blogTotal,
  };
}
