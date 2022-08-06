import "./App.css";

function App() {
  let post = "First Name server dummy data";

  return (
    <div className="App">
      <div className="black-nav">
        <h2 style={{ color: "red", fontSize: "20px" }}>Blog</h2>
      </div>
      <h3>{post}</h3>
    </div>
  );
}

export default App;
