# 📌 React Document

[React Document](https://ko.reactjs.org/)

> React는 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리

<br>

## ✅ React 개념 이해

- blog에 정리
- https://parkgeonwoong.github.io/categories/React/Document/

<br>

### 🔸 React 설치

`Create React APP`

```bash
# npx react 설치
npx create-react-app my-app
cd my-app
npm start

# yarn react 설치
yarn create-react-app my-app
cd my-app
yarn start
```

<br>

### 🔸 yarn을 이용한 Sass

- [Yarn Page](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```bash
# npm yarn
npm install --global yarn

# npm install
yarn install 또는 yarn

# npm i <package> --save
yarn add <package>

# npm i <package> --save-dev
yarn add <package> --dev : --dev 옵션은 -D 와 같다.

# 패키지 삭제
yarn remove <package>

# Sass 설치
yarn add sass

```

<br>

## ✅ React Todo

- [x] 리액트?
- [x] JSX
- [x] 컴포넌트 props state
- [x] 이벤트 핸들링
- [x] ref: DOM
- [x] 컴포넌트 반복
- [x] 컴포넌트의 라이프사이클 메서드
- [x] Hooks
- [x] 컴포넌트 스타일링
- [x] 프로젝트
- [x] 컴포넌트 성능 최적화
- [ ] immer 불변성 유지
- [ ] 리액트라우터 SPA
- [ ] 외부 API 연동
- [ ] Context API
- [ ] 리덕스 라이브러리
- [ ] 리덕스 사용해 상태 관리
- [ ] 리덕스 미들웨어를 통해 비동기 작업 관리
- [ ] 코드 스플리팅
- [ ] 서버 사이드 렌더링

<br>

## ✅ React 소스코드 연습

- [class Component](https://github.com/parkgeonwoong/document-react/commit/2aad81d0814b5552b01bb4e0d3b6ad7760c078a0)
- [props & children & destructuring](https://github.com/parkgeonwoong/document-react/commit/df5cbf2be48621ad6673e25dedebf54dda239341)
- [propTypes](https://github.com/parkgeonwoong/document-react/commit/cc1c8c206ed97137e6e5f27b7aef0d2987414331)
- [class Component state](https://github.com/parkgeonwoong/document-react/commit/0409cbb5d2c2cfd0332ee4a977cf639b30d44f59)
- [function Component state](https://github.com/parkgeonwoong/document-react/commit/4dd5b3b1680239765e0375de066bc4a429300fc6)
- [class Component: eventHandler state-input](https://github.com/parkgeonwoong/document-react/commit/c30ab066538456c7ae7d8f1b6e3abcbf1e3eb6d5)
- [e.target.name](https://github.com/parkgeonwoong/document-react/commits/main)
- [fuction Component: eventHandle](https://github.com/parkgeonwoong/document-react/commit/7d4bf39fb3c2a0bcba67944e8c08bdc9552d3cc0)
- [ref: callback & createRef](https://github.com/parkgeonwoong/document-react/commit/a88417427f16583c4055ea0cb1d3120c555fda73)
- [ref: Component](https://github.com/parkgeonwoong/document-react/commit/41ac7a3b21d5dc9789aedf654f3b6419c6ef0a76)
- [component iteration: map()](https://github.com/parkgeonwoong/document-react/commit/584fbd813ca2ead1e1effd355f309d59af1ae500)
- [component iteration: key](https://github.com/parkgeonwoong/document-react/commit/d4fc1203aa607aa92e20515c6bf69530cc28ce93)
- [dynamic array rendering](https://github.com/parkgeonwoong/document-react/commit/3b2143a5f0759edcb7d703774f9985f4d635e17b)
- [LifeCycle component](https://github.com/parkgeonwoong/document-react/commit/86b328e6ee05f169a3caf35bc0fbf811b5427081)
- [LifeCycle Error componentDidCatch](https://github.com/parkgeonwoong/document-react/commit/ce0216196591be47d0dc0c23b5cdb49b449356f6)
- [Hooks: useState & useEffect](https://github.com/parkgeonwoong/document-react/commit/2e8bf933379637059a5e1ff25867f6f1b433007d)
- [Hooks: useReducer](https://github.com/parkgeonwoong/document-react/commit/9b3a86fb4ec6f2b59a33891b70ed561598d64421)
- [Hooks: useMemo](https://github.com/parkgeonwoong/document-react/commit/ee83e264e1e44f43f3b44fea2ed51a526081ef1a)
- [Hooks: useCallback](https://github.com/parkgeonwoong/document-react/commit/1f9948c10894e0f85fbb6ea3a2a8352486175af6)
- [Hooks: useRef](https://github.com/parkgeonwoong/document-react/commit/6a4ebd1c079b30fd28fe8193b7db9629194b2ac1)
- [Hooks: CustomHook](https://github.com/parkgeonwoong/document-react/commit/a6449ee5957e2ba8c8fd75736ae33d396e99aa45)
- [Sass setting & utils](https://github.com/parkgeonwoong/document-react/commit/5e43086841d63ca99f7d3a6a6904c79b6b430d7c)
- [Sass node_modules library load](https://github.com/parkgeonwoong/document-react/commit/aadd7050a2b091aa2d9af76d6e4373565fbc58d2)
- [CSS Module](https://github.com/parkgeonwoong/document-react/commit/5db6a8c79eb656093c703fc4018b329125091ac9)
- [Styled-Components](https://github.com/parkgeonwoong/document-react/commit/72c369d9961961d6c1b7eb46fd73ec17ad265d13)

[TodoList 레포지토리](https://github.com/parkgeonwoong/todo-react)

- [TodoList-project](https://github.com/parkgeonwoong/todo-react/commit/a618a37b2fd51b4665e3567dc56298810502fedc)
- [Optimize component performance: React.memo useState](https://github.com/parkgeonwoong/todo-react/commit/eab555c47ab59a6050e19ccb048ee60c08a307d3)
- [Optimize component performance: React.memo useReducer](https://github.com/parkgeonwoong/todo-react/commit/52ffb3d13f050d6379ce224dbbda543d027ac960)
- [Optimize component performance: react-virtualized](https://github.com/parkgeonwoong/todo-react/commit/708e22ed59960b771d74fba2957d5be185bca22a)
