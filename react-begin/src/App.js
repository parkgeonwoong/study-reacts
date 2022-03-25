import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100");
  }, []);

  return (
    <div>
      <h1>This Coins</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul></ul>
    </div>
  );
}

export default App;
