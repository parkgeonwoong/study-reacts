import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
