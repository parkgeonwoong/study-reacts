const express = require('express') //express 모듈을 가져옴
const app = express()  // function을 이용해 app을 만듬
const port = 5000   

const bodyParser = require('body-parser') // bodyParser 모듈 가져옴 

const config = require('./config/key'); // 비밀 설정 정보

const { User } = require("./models/User"); // User.js에서 데이터 가져옴

// bodyParser 옵션을 준다.
// bodyParser: 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 함

// application /x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());


// 어플리케이션 & 몽고디비 연결
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    // 위에 쓰는 이유 에러가 안뜨게 하기 위해서
}).then(() => console.log('MongoDB Connected...')) // =>: function기능을 간소화 catch(function(err){ return console.log..})
  .catch(err => console.log(err))       //map: 호출 배열의 모든 요소에 대해 제공된 함수를 호출 한 결과로 채워진 새 배열을 만듬


// mongo db 에서 사용자 가져오기
// mongodb+srv://msa:<password>@---.----.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



app.get('/', (req, res) => { //루트 디렉토리에 "/" 
  res.send('Hello World!    안녕하세요!! 오늘은 행복한 하루.')
})
// req: request  , res: response


// 회원가입을 위한 라우터 만들기
app.post('/register', (req, res) => {

  // 회원 가입 할때 필요한 정보들을 client에서 가져오면 
  // 그것들을 데이터베이스에 넣어준다.

  /* req에 들어가 있다. JSON 형식으로
    {
      id: "hello",
      password: "123"
    }
  */
    // User 인스턴스화
   const user = new User(req.body)  // bodyParser에서 받아오는 데이터를 저장할려면 req.body
// --> 여기에 User.js의 암호화 bcrypt

   // 몽고디비에서 오는 메소드 save()
   user.save((err, userInfo) => {  // 콜백 function
      if(err) return res.json({ success: false, err}) // 성공하지 못했을 때
        return res.status(200).json({   // status(200): 성공했다는 의미
          success: true
        })
   })
})

// 로그인을 위한 라우터 생성
app.post('/login', (req, res) => {

  // 요청한 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {  // user 콜렉션 안에 이메일을 가진 유저가 한명도 없다면 user가 없다
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }

  // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 같은지 확인
    user.comparePassword(req.body.password , (err, isMatch) => {
      if(!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})

  // 비밀번호까지 맞다면 Token은 생성하기
      user.generateToken((err, user) => {


        
      })

    })

  })

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  // listen=이벤트리스너, 핸들러 ==> 콘솔로그를 보여줌
})