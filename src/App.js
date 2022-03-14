import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
