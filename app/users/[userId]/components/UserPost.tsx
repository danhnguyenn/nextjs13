import { Post } from "@/app/models/Post";
import * as React from "react";

export interface IUserPostsProps {
  promise: Promise<Post[]>;
}

export default async function UserPosts({ promise }: IUserPostsProps) {
  const posts = await promise;

  const content = posts.map((post) => (
    <div key={post.id}>
      <h3 className="text-bold text-3xl">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
  return content;
}
