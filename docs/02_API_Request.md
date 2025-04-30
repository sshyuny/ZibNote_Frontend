# 02. API Request
- HTTP 요청 방법을 발전시킨다.

## 1. useSWR과 mutate

### 1.1. 기본적인 GET 요청시, useSWR과 mutate 사용
- HTTP GET 요청시, 아래 이유로 useSWR과 mutate 사용!
    - 캐시 기능과 강제 캐시 업데이트를 편하게 사용하기 위해
    - fetch를 직접 사용할 경우, 데이터 최신화를 위해 관련 컴포넌트마다 refreshKey 값을 넘겨주고 변경해야하던 번거로움 제거
- mutate 사용 방법
    - 데이터 생성(HTTP POST) 요청일 경우, 조회 이전 호출될 가능성을 감안하여 fetcher 함수 전달
    - 데이터 삭제(HTTP DELETE) 요청일 경우, 항상 조회 이후 호출됨을 고려하여 fetcher 함수 전달 안함
```typescript
// 데이터 생성 이후 refresh 조회시
mutate("/search", () => fetchSearchResults("/search"));

// 데이터 삭제 이후 refresh 조회시
mutate("/search");
```

### 1.2. GET 요청 시점 지정을 위한, useSWRMutation 사용
- HTTP GET 요청을 특정 시점(버튼 클릭)에 시작하고 싶음!
    - 간편한 사용을 위해 `useSWRMutation` 사용
```typescript
  const { trigger, data, error, isMutating } = useSWRMutation(
    `${API_ORIGIN}/api/structure/list?name=${structureName}&address=${structureAddress}`,
    fetchStructureResults,
  );
```

### 1.3. 특정 값을 기준으로 GET 요청하기 위해, useSWR에 key로 null 넘기기
- `const { data, error, mutate } = useSWR(null, fetcher);` 처럼 key에 null이 전달될 경우 useSWR은 fetcher를 실행하지 않는 점을 활용하여 아래처럼 구성한다!
```typescript
// page.tsx
const { data, error, isLoading } = useSWR(memberSwrKey, fetchMemberResult);

// api.ts
export const fetchMemberResult = async (key: string) => {
  const res = await fetch(`${API_ORIGIN}/api/member`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("검색 실패");
  return res.json();
};
```

