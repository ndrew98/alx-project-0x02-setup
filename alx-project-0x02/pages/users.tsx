import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        type ApiUser = {
          name: string;
          email: string;
          address: {
            street: string;
            city: string;
          };
        };
        const formattedUsers = data.map((user: ApiUser) => ({
          name: user.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.city}`,
        }));
        setUsers(formattedUsers);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Users</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {users.length > 0 ? (
            users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Loading users...</p>
          )}
        </div>
      </main>
    </div>
  );
}
