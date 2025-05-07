import { fetchGetMethod } from "@/component/CommonApi";
import { MemberLoginType, MemberRegisterType } from "./MemberType";

const API_ORIGIN = process.env.NEXT_PUBLIC_ZIBNOTE_API_ORIGIN;

export const fetchMemberResult = async (key: string) => {
  return fetchGetMethod(`${API_ORIGIN}/api/member`, "검색 실패");
};

export const loginMember = async (requestData: MemberLoginType) => {
  const res = await fetch(`${API_ORIGIN}/pass/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: requestData.name,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.data);
    return data;
  } else {
    throw new Error("로그인 실패");
  }
};

export const registerMember = async (requestData: MemberRegisterType) => {
  const res = await fetch(`${API_ORIGIN}/pass/api/register`, {
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
