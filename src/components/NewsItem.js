import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 2rem;
    img {
      margin: 10px;
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;

      &:hover {
        transform: scale(1.1);
        transition: all 0.7s ease;
      }
    }
  }

  .contents {
    h2 {
      margin: 10px;
      a {
        text-decoration: none;
        color: black;
      }
      &:hover {
        transform: scale(1.05);
        transition: all 0.7s ease;
      }
    }
    p {
      margin: 10px;
      margin-top: 10px;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"></img>
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
