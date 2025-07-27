import React from "react";
import { useState } from "react";

interface PostModalprops {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalprops) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // If the modal is not open, return null to avoid rendering
  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (title.trim() && content.trim()) {
      onSubmit(title, content); // Call the onSubmit prop with title and content
      setTitle(""); // Reset title input
      setContent(""); // Reset content input
      onClose(); // Close the modal after submission
    }
  };
  return (
    <div>
      <div>
        <h2>Add New Post</h2>
        <form action="" onSubmit={handleSubmit} className="space-x-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full border rounded p-2 required"
          />

          <textarea
            name="content"
            placeholder="Content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="w-full border rounded p-2 required"
            rows={4}
          ></textarea>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
