"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import { fetchMemberResult } from "@/feature/member/api";

export default function Home() {
  const [memberName, setMemberName] = useState("");
  const router = useRouter();

  const memberSwrKey: unknown[] = ["/member", "1"];
  const { data, error, isLoading } = useSWR(memberSwrKey, () =>
    fetchMemberResult(),
  );

  useEffect(() => {
    if (error) {
      router.push("/login");
    }
    if (data?.data) {
      setMemberName(data.data);
    }
  }, [memberName, data, error]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-600">
        {memberName} 님, 안녕하세요 :){" "}
      </h1>
      <Link href="/dashboard">
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          대시보드로 이동!
        </button>
      </Link>
    </div>
  );
}
