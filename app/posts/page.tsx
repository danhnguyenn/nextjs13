export interface IPostListProps {}

async function PostList(props: IPostListProps) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div>
      <h1 className="text-2xl text-center uppercase font-bold">Post List</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={post.id}>
            {index + 1} - {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
