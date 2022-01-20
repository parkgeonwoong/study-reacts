const IterationSample = () => {
  const names = ["a", "b", "c", "d", "e"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
