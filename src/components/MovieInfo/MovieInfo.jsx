import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MovieContainer,
  MovieInfoContainer,
  BackButton,
} from './MovieInfo.styled';
import defaultMoviePicture from '../../pictures/defaultMoviePicture.jpg';

export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const MovieInfo = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <>
      <BackButton to={backLinkHref.current}>Go back</BackButton>
      <MovieContainer>
        <img
          width="200"
          src={
            poster_path ? IMAGES_BASE_URL + poster_path : defaultMoviePicture
          }
          alt={title}
        />
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

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MovieInfo;
