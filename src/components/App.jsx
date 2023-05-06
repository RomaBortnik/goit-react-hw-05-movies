import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';

// import fetchPopularMovies from './services/fetchPopularMovies';
// import fetchMoviesByQuery from './services/fetchMoviesByQuery';
import fetchMovieDetails from './services/fetchMovieDetails';
import SharedLayout from './SharedLayout';
import Cast from './Cast';
import Reviews from './Reviews';

fetchMovieDetails(100, 'reviews');

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};
