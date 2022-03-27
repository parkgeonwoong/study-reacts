import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, coverImg, title, genres }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt="title" />

      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`} className={styles.movie__title}>
          {title}
        </Link>
      </h2>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
