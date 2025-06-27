import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  return NextResponse.redirect(kakaoAuthUrl);
}
