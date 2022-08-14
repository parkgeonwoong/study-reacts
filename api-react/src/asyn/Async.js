const Async = () => {
  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error("NumberBigError");
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  };

  const runTasks = async () => {
    try {
      let result = await increase(0);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
      console.log(result);
      result = await increase(result);
    } catch (e) {
      console.log(e);
    }
  };

  runTasks();
};

export default Async;
