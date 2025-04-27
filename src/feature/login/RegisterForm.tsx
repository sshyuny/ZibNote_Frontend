"use client";

import { useState } from "react";
import { registerMember } from "../member/api";
import { MemberRegisterType } from "../member/MemberType";

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
      const requestData: MemberRegisterType = {
        name: name,
      };
      const responseData = await registerMember(requestData);
      setMessage(`회원가입 성공!  ${responseData.memberName || name}`);
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
