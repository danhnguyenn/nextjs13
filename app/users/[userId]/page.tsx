import getUser from "@/app/lib/getUser";
import getUserPosts from "@/app/lib/getUserPosts";
import { User } from "@/app/models";
import { Post } from "@/app/models/Post";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPost";
import { Metadata } from "next";
import { getAllUsers } from "@/app/lib";
import { notFound } from "next/navigation";

export interface PostDetailProps {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId },
}: PostDetailProps): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user) {
    return {
      title: "User not found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function PostDetail({
  params: { userId },
}: PostDetailProps) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);
  //const [user, userPosts] = await Promise.all([userData, userPostData]);

  const user = await userData;

  if (!user) {
    return notFound();
  }

  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
