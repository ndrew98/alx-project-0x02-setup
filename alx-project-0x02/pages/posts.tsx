import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.map(
          (post: { title: string; body: string; userId: number }) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          })
        );
        setPosts(formattedPosts);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Loading posts...</p>
          )}
        </div>
      </main>
    </div>
  );
}
