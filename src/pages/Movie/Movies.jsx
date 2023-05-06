import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchMoviesByQuery from 'components/services/fetchMoviesByQuery';

import Searchbar from 'components/Searchbar';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getMovies();
  }, [query]);

  const handleSubmit = value => {
    if (value.trim() === query.trim()) {
      toast.error('Sorry, you entered a previous query. Please try again.');
    } else {
      setQuery(value);
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

export default Movies;
