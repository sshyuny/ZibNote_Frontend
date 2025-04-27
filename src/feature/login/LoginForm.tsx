"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MemberLoginType } from "../member/MemberType";
import { loginMember } from "../member/api";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const requestData: MemberLoginType = {
        name: name,
      };
      await loginMember(requestData);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-600">
          아이디
        </label>
        <input
          type="text"
          className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {isLoading ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
