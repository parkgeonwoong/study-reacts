const KmToMiles = () => {
  const [distance, setDistance] = React.useState(0);
  const [invert, setInvert] = React.useState(false);

  const onChange = (e) => {
    setDistance(() => e.target.value);
  };
  const onInvert = () => {
    reset();
    setInvert((current) => !current);
  };
  const reset = () => {
    setDistance("");
  };
  return (
    <div>
      <h3>KM 2 M</h3>
      <div>
        <label htmlFor="kilo">Kilo: </label>
        <input
          value={invert ? Math.ceil(distance * 1.6) : distance}
          id="kilo"
          placeholder="KiloMeter"
          type="number"
          onChange={onChange}
          disabled={invert}
        />
      </div>
      <div>
        <label htmlFor="mile">Mile: </label>
        <input
          value={invert ? distance : Math.ceil(distance / 1.6)}
          id="mile"
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={!invert}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>Invert</button>
    </div>
  );
};

export default KmToMiles;
