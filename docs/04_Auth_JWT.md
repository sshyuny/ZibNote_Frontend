# 배경
- 로그인 상태를 관리하기 위해 여러 방법을 사용해본다.

## 방법 1. 기본 쿠키 사용
- 스프링에서 기본으로 처리되는 쿠키인 JSESSIONID를 사용하여, 별도 설정 필요하지 않음.

## 방법 2. JWT 사용
- JWT를 사용하여 직접 서버에 토큰을 전달한다.

### 2.1. localstorage
- 로그인이 성공하면 localStorage에 토큰을 넣어두었다가, 이후 다른 요청에서 localStorage에서 꺼낸 토큰을 헤더에 직접 넣어준다.

```typescript
// 1. 로그인시 토큰 localStorage에 저장
export const login = async () => {
  const res = await fetch( ... );
  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.data);
  }
};

// 2. 요청할때 헤더에 토큰 넣기
export const fetchGetMethod = async () => {

  // 토큰 받아서 헤더에 넣어주기!
  const token = localStorage.getItem("token");
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

};
```

### 2.2. HttpOnly
