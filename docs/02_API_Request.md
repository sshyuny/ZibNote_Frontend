# 배경
- HTTP 요청 방법을 발전시킨다.

## 진행 과정

### 1. GET 요청시, useSWR과 mutate 사용
- HTTP GET 요청시, 아래 이유로 useSWR과 mutate 사용!
    - 캐시 기능과 강제 캐시 업데이트를 편하게 사용하기 위해
    - fetch를 직접 사용할 경우, 데이터 최신화를 위해 관련 컴포넌트마다 refreshKey 값을 넘겨주고 변경해야하던 번거로움 제거
- mutate 사용 방법
    - 데이터 생성(HTTP POST) 요청일 경우, 조회 이전 호출될 가능성을 감안하여 fetcher 함수 전달
    - 데이터 삭제(HTTP DELETE) 요청일 경우, 항상 조회 이후 호출됨을 고려하여 fetcher 전달 안함
```typescript
// 데이터 생성 요청
mutate(["/search", memberId], () => fetchSearchResults(memberId));

// 데이터 삭제 요청
mutate(["/search", memberId]);
```

