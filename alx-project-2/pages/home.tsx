import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import { useState } from "react";
import PostModal from "../components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Card One", content: "This is the first card." },
    { title: "Card Two", content: "This is the second card." },
  ]);

  // Function to update posts
  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-6 ">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            + Add Post
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => {
            return (
              <Card key={index} title={post.title} content={post.content} />
            );
          })}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
