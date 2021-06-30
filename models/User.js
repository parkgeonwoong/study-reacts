// mongoose 모듈 가져오기 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const saltRounds = 10
const jwt = require('jsonwebtoken');

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
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    } 
})

// 몽구스 메소드
// index.js에서 save 나오기 전에 먼저 실행
userSchema.pre('save', function( next ) {
    var user = this; // 스키마를 가리킨다.

//  비밀번호 수정일 경우에만 보여주게 조건을 달아줌
    if (user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(user.password , salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
     
})  


// 유저모델에서 comparepassword메소드를 만든다.
userSchema.methods.comparePassword = function(plainPassword, cb) {

    // plainPassword: 1234       암호화된 비밀번호: $2b$10$IJk/Rbqbvqh6ykLn
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);     // 암호화를 하고 나서 같지않다. 에러
            cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this

    // Jsonwebtoken을 이용해서 토큰을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + secretToken = token
    // ->
    // 'secretToken' -> user._id

    user.token = token
    user.save(function(err, user) { 
        if(err) return cb(err)
        cb(null, user)
    })
}


// 스키마를 모델로 감싼다.
// model(모델이름, 스키마이름)
const User = mongoose.model('User', userSchema)

// 모델을 다른 파일에서도 쓰게 하는 것 
module.exports = { User }