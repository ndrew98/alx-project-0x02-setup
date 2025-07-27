import { UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm mt-2">{address}</p>
    </div>
  );
}
