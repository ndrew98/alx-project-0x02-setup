import { PostProps } from "../../interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
