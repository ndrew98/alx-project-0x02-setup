import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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
            <p className="text-center text-gray-600">No posts available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );
    const data = await res.json();

    const formattedPosts: PostProps[] = data.map(
      (post: { title: string; body: string; userId: number }) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      })
    );

    return {
      props: {
        posts: formattedPosts,
      },
      // Revalidate the page every 3600 seconds (1 hour)
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);

    return {
      props: {
        posts: [],
      },
      revalidate: 60, // Retry after 1 minute if there was an error
    };
  }
};
