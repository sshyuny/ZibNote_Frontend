"use client";

import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/member/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name }),
          credentials: "include", // 세션/쿠키 인증일 경우 필요!
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "로그인 실패");
      }

      const data = await response.json();
      setMessage(`회원가입 성공!  ${data.memberName || name}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="my-4 text-blue-600">{message}</div>

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
        {isLoading ? "제출 중..." : "제출"}
      </button>
    </form>
  );
}
