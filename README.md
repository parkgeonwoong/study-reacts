# Todo-react

- react의 기본기부터 컴포넌트 스타일링까지 방법을 토대로 side 프로젝트 일정 관리 애플리케이션 구현

## UI 구성 - 기획

1. TodoTemplate

   - 화면을 가운데 정렬, 앱 타이틀을 보여 준다. childern으로 내부 JSX를 props 받아와 렌더링

2. TodoInsert

   - 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
   - state를 통해 인풋의 상태를 관리한다

3. TodoListItem

   - 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트
   - todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌

4. TodoList
   - todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해 여러 개의 TodoListItem 컴포넌트로 변환해 보여준다
