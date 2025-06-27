"use client";

import Image from "next/image";

export default function SocialLogin() {
  const handleKakaoClick = () => {
    window.location.href = `/api/auth/kakao`;
  };
  const handleNaverClick = () => {
    window.location.href = `/api/auth/naver`;
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src="/images/kakao_login.png"
          alt="Naver Login"
          width={200}
          height={100}
          onClick={handleKakaoClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <Image
          src="/images/naver_login.png"
          alt="Naver Login"
          width={200}
          height={100}
          onClick={handleNaverClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}
