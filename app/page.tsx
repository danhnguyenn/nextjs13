import Image from "next/image";
import Counter from "./components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/users">Go to page Users</Link>
    </main>
  );
}
