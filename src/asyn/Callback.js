const Callback = () => {
  const increase = (number, callback) => {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  };

  increase(0, (result) => {
    alert(result);
  });
};

export default Callback;
