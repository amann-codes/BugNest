"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const {data : session} = useSession();
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-b from-[#393535] via-[#131212] to-black">
      <div className="text-white">
      {JSON.stringify(session)}
      </div>
      <div className="flex flex-row gap-x-4">
        <button
          className="py-3 px-6 bg-[#3274a9] w-max h-max text-white font-bold rounded-[6px]"
          onClick={() => router.push("/signin")}
        >
          Login
        </button>
        <button
          className="py-3 px-6 bg-[#3274a9] w-max h-max text-white font-bold rounded-[6px]"
          onClick={() => router.push("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
