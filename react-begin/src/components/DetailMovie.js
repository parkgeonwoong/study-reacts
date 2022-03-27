const DetailMovie = ({
  coverImg,
  title,
  year,
  rating,
  runtime,
  description,
}) => {
  return (
    <div>
      <img src={coverImg} alt="title" />
      <h2>{title}</h2>
      <ul>
        <li>Year: {year}</li>
        <li>Rating: {rating}</li>
        <li>RunTime: {runtime}</li>
      </ul>
      <p>{description}</p>
    </div>
  );
};

export default DetailMovie;
