# 📌 외부 API

- 외부 API를 연동하여 뉴스 뷰어 만들어보기
- 비동기작업을 배워 연습해보기

<br>

## ✅ 비동기작업

- 콜백 함수를 이용
- Promise
- async/await -> try/catch
- axios

<br>

## ✅ 진행도

1. 비동기 작업 이해
2. axios로 API 호출해서 데이터 받아오기
3. newsapi 키 발급받기 (https://newsapi.org/)
4. 뉴스 뷰어 UI 만들기
5. 데이터 연동하기
6. 카테고리 기능 구현하기
7. 리액트 라우터 적용

<br>

### Promise

```javascript
const promise = new Promise((resolve, reject) => {
    // resolve: 성공, reject: 실패
    setTimeout(() => {
        상태 변화
        if ( 에러 조건 ){
            const e = new Error('error')
            return reject(e)
        }
        resolve(상태변화)
    }, 1000)
})

함수().then(() => {
    // .then을 사용하여 그 다음 작업을 설정
})
```

<br>

### async/await

- Promise를 선언하고 사용할 때 해당 함수 앞에 await 키워드 사용

```javascript

const function = async () => {
    try {
        let result = await PromiseFunction()
        result = await PromiseFunction()
    } catch (e) {
        console.log(e)
    }
}

```

<br>

## axios

```bash
npm i axios
```

<br>

```javascript
const [data, setData] = useState(null);
const onClick = () => {
  axios.get("http://...").then((response) => {
    setData(response.data);
  });
};
```

```javascript
const [data, setData] = useState(null);
const onClick = async () => {
  try {
    await axios.get("http://...");
    setData(response.data);
  } catch (e) {
    console.log(e);
  }
};
```

<br>

## Context API

- 전역적으로 사용할 데이터가 있을 때 유용하다
- 더 많은 컴포넌트를 거칠 경우 관리가 힘들다 -> 그러기에 손쉽게 관리

<br>

- **생성**

```jsx
// color.js
import { createContext } from "react";

const ColorContext = createContext({ color: "black" });

export default color;
```
