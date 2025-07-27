import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">My App</h1>
      <nav className="space-x-4">
        <Link href="/">Index</Link>
        <Link href="/home">Home</Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
      </nav>
    </header>
  );
}
