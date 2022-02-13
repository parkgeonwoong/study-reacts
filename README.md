# react-router tutorial

- 리액트 라우터 튜토리얼을 진행해보고 개념을 정리
- react-router V6.2
- [react-router Document](https://reactrouter.com/docs/en/v6/getting-started/installation)

<br>

## 알아야 하는 개념

- 라우팅이란?
- SPA 란?
- react-router 적용 사용법
  - 프로젝트 생성 및 라이브러리 설치
  - 라우터 적용
  - 페이지 컴포넌트 만들기
  - Route 컴포넌트로 경로에 원하는 컴포넌트 보이기
  - Link 컴포넌트 사용 이동
- URL 파라미터
- 쿼리 스트링
- 중첩된 라우트
- 부가기능

<br>

## 사용법

1. react-router-dom 설치
2. index.js -> `<BrowserRouter JSX >` 감싸기 (새로고침 않고 주소 변경)
3. App.js -> Routes, Route 사용

   - `<Routes>` `<Route path="주소 규칙" element={<보여 줄 컴포넌트 JSX>}>`

4. 페이지 이동 : `<Link to="경로"> 이름 </Link>`
5. URL 파라미터

   - 라우트 설정: `<Route path="/profiles/:id element={<Profile />}>`
   - useParams Hook 설정 : `import { useParams } from "react-router-dom"`
   - 함수 안에 : `const {id} = useParams()`
   - Link에 따라 파라미터 : `<Link to="/profiles/1">`

6. 쿼리스트링

   - 파싱작업
   - useSearchParams Hook 설정 : `import { useSearchParams } from "react-router-dom";`
   - 함수 안에 : `const [searchParams, setSearchParams] = useSearchParams();`
   - get, set 메서드 사용 : `const detail = searchParams.get("detail");`

7. 중첩된 라우트

   - `<Route path="" element={<>}>` 안에 `<Route>`
   - Outlet Hook 사용 : Route의 children으로 들어가는 JSX 엘리먼트 보여줌 -> `<Outlet />`
