import { Metadata } from "next";
import * as React from "react";
import { getAllUsers } from "../lib";
import { User } from "../models";
import Link from "next/link";

export interface UserListProps {}

export const metadata: Metadata = {
  title: "User List",
};

async function UserList(props: UserListProps) {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <h1 className="text-2xl text-center uppercase font-bold">User List</h1>
      <ul>
        {users.map((user: User, index: number) => (
          <li key={user.id}>
            {index + 1} - <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );

  return content;
}

export default UserList;
