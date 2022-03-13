const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onCLick={onIncrease}>+1</button>
        <button onCLick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
