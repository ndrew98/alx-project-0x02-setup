import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
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
            <p className="text-center text-gray-600">No users available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    type ApiUser = {
      name: string;
      email: string;
      address: {
        street: string;
        city: string;
      };
    };

    const formattedUsers: UserProps[] = data.map((user: ApiUser) => ({
      name: user.name,
      email: user.email,
      address: `${user.address.street}, ${user.address.city}`,
    }));

    return {
      props: {
        users: formattedUsers,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);

    return {
      props: {
        users: [],
      },
      revalidate: 60,
    };
  }
};
