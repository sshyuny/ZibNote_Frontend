import { MemberLoginType, MemberRegisterType } from "./MemberType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchMemberResult = async (key: string) => {
  const res = await fetch(`${API_ORIGIN}/api/member`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("검색 실패");
  return res.json();
};

export const loginMember = async (requestData: MemberLoginType) => {
  const res = await fetch(`${API_ORIGIN}/api/member/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: requestData.name,
    }),
    credentials: "include",
  });

  if (!res.ok) throw new Error("로그인 실패");
  return res.json();
};

export const registerMember = async (requestData: MemberRegisterType) => {
  const res = await fetch(`${API_ORIGIN}/api/member/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: requestData.name,
    }),
  });

  if (!res.ok) throw new Error("회원가입 실패");
  return res.json();
};
