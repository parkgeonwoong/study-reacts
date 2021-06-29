// mongoose 모듈 가져오기 
const mongoose = require('mongoose');

// 스키마 생성
const userSchema = mongoose.Schema({
    id: {
        type: String,
        maxlength: 50,
        unique: 1   //똑같은 id는 못쓰게 
    },
    password: {
        type: String,
        minlength: 3,
    },
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    // 관리자, 일반 유저
    role: {
        type: Number,   // 1이면 관리자 
        default: 0      // 기본값은 0 일반 유저
    },
    image: String,  
})

// 스키마를 모델로 감싼다.
// model(모델이름, 스키마이름)
const User = mongoose.model('User', userSchema)

// 모델을 다른 파일에서도 쓰게 하는 것 
module.exports = { User }