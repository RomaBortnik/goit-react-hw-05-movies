import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { lazy } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchMoviesByQuery from 'components/services/fetchMoviesByQuery';

import Searchbar from 'components/Searchbar';
const MovieList = lazy(() => import('components/MovieList'));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    const getMovies = async () => {
      try {
        const data = await fetchMoviesByQuery(movieName);
        if (data.results.length === 0) {
          setMovies([]);
          return toast.error(
            'There are no movies matching your search query. Please try again.'
          );
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getMovies();
  }, [movieName]);

  return (
    <>
      <Searchbar onSubmit={updateQueryString} />
      {movies.length !== 0 && <MovieList movies={movies} />}
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

export default Movies;
