/**
 * @desc : 홈 컴포넌트
 * @TODO:
 * - react-query
 */

import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api/api";

const Home = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  // console.log("data", data, "isLoading", isLoading);

  return <div style={{ height: "200vh" }}>Home</div>;
};

export default Home;
