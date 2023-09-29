import * as React from "react";

export interface PostLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return <div>{children}</div>;
}
