const Promises = () => {
  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
      // resolve = 성공, reject = 실패
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          // 에러
          const e = new Error("NumberTooBig");
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  };

  increase(0)
    .then((number) => {
      // promise에서 resolve된 값은 then으 통해 받아 온다
      console.log(number);
      return increase(number); // promise 리턴하면
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default Promises;
