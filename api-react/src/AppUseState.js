import "./App.css";
import { useCallback, useState } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const AppUseState = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default AppUseState;
