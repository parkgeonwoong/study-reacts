import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);

  // TODO: 키워드를 통해 API 이용하기

  return <div>Search</div>;
};

export default Search;
