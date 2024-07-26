"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return !session ? (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link
        href={"/login"}
        className="border px-4 py-2 text-red-400 rounded"
      >
        Please login to see the content
      </Link>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-green-400 border p-4">
        Welcome back buddy 😊
      </h1>
    </div>
  );
}
