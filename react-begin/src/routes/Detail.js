import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    // console.log(json.data.movie);
    setMovieData(() => json.data.movie);
    setLoading(() => false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieData);

  return (
    <div>
      <h2>Detail</h2>
      <hr />
      {loading ? (
        <h2>Loading Movie...</h2>
      ) : (
        <DetailMovie
          coverImg={movieData.medium_cover_image}
          title={movieData.title}
          year={movieData.year}
          rating={movieData.rating}
          runtime={movieData.runtime}
          description={movieData.description_intro}
        />
      )}
    </div>
  );
};

export default Detail;
