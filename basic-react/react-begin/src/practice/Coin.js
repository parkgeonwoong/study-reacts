import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(() => false);
      });
  }, []);

  const onChange = (e) => {
    setMyMoney(e.target.value);
  };

  return (
    <div>
      <h1>This Coins {loading ? "" : `${coins.length}`}</h1>
      <input
        onChange={onChange}
        value={myMoney}
        type="number"
        placeholder="Please Write your USD"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}):
              {myMoney / coin.quotes.USD.price} {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
