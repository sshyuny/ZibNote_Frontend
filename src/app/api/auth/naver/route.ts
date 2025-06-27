import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI;
  const NAVER_STATE = process.env.NAVER_STATE;

  const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE}`;

  return NextResponse.redirect(naverAuthUrl);
}
