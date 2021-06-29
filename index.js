const express = require('express') //express 모듈을 가져옴
const app = express()  // function을 이용해 app을 만듬
const port = 5000   

// 어플리케이션 & 몽고디비 연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://msa:1234@msa.qmpl3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    // 위에 쓰는 이유 에러가 안뜨게 하기 위해서
}).then(() => console.log('MongoDB Connected...')) // =>: function기능을 간소화 catch(function(err){ return console.log..})
  .catch(err => console.log(err))       //map: 호출 배열의 모든 요소에 대해 제공된 함수를 호출 한 결과로 채워진 새 배열을 만듬

// mongo db 에서 사용자 가져오기
// mongodb+srv://msa:<password>@msa.qmpl3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get('/', (req, res) => { //루트 디렉토리에 "/" 
  res.send('Hello World!    안녕하세요!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  // listen=이벤트리스너, 핸들러 ==> 콘솔로그를 보여줌
})