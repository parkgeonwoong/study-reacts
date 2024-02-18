## Cinema-ts

|       스택        |    설명     |
| :---------------: | :---------: |
|    TypeScript     |  타입 관리  |
| react-router-dom  | 라우팅 관리 |
|      Recoil       |  상태 관리  |
|    react-query    |  API 관리   |
| Styled-components | 스타일 관리 |
|   framer-motion   | 애니메이션  |

<!--
|   react-hook-form   |   폼 관리    |
| react-beautiful-dnd | 드래그앤드롭 |
 -->

<br>

## 이슈 및 해결

1. Home 컴포넌트

\- 코드분할이 필요함 재사용 목적이 아니라 가독성을 목적으로 진행

\- 슬라이드가 배너화면에서 진행했지만 사용자가 알 수가 없기 때문에 직관적인 아이콘을 첨부하여 직관성을 높여야 할 필요가 있음

\- 슬라이드가 단순하게 한쪽으로 지나가는 것이 아닌 왼쪽, 오른쪽 갈 수 있는 애니메이션을 첨부

<br>

## 프로젝트를 진행하면서 겪은 문제점

1. 레이아웃 Header 리팩토링

\- 코드량이 너무 많아서 리팩토링을 해야겠다고 생각했다. 하지만 어떻게 리팩토링을 진행해야 할지 모르겠다. 재사용을 위해서 리팩토링을 하는 것이 아니라 내 자신이 다시 코드를 접했을 경우 이해하기 쉽게 짜야한다고 생각했다. 그래서 가독성을 위주로 컴포넌트를 분리하여 작업을 하였다.

\- 리팩토링에 대해서 개념을 알고 적응하고 싶다는 생각이 들었다. 이 프로젝트가 끝나면 리팩토링에 대해서 공부를 진행하고 다시 한번 리팩토링을 진행해보고 싶다.