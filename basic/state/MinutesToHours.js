const MinutesToHours = () => {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (e) => {
    setAmount(() => e.target.value);
  };
  const reset = () => setAmount(() => "");
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
        <h4>{flipped ? amount * 60 : amount}</h4>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amount : Math.floor(amount / 60)}
          id="hours"
          placeholder="Minutes"
          type="number"
          disabled={!flipped}
          onChange={onChange}
        />
        <h4>{flipped ? amount : Math.floor(amount / 60)}</h4>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
    </div>
  );
};

export default MinutesToHours;
