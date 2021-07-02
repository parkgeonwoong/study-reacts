if(process.env.NODE_ENV === 'production') { //환경변수 설정 
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}