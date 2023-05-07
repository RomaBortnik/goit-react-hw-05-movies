import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MovieContainer,
  MovieInfoContainer,
  BackButton,
} from './MovieInfo.styled';

export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const MovieInfo = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <>
      <BackButton to={backLinkHref.current}>Go back</BackButton>
      <MovieContainer>
        <img src={IMAGES_BASE_URL + poster_path} alt={title} />
        <MovieInfoContainer>
          <h1>{title}</h1>
          <p>Vote average: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </MovieInfoContainer>
      </MovieContainer>
    </>
  );
};

export default MovieInfo;
