import MovieList from 'components/MovieList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import fetchPopularMovies from 'components/services/fetchPopularMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data.results);
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getPopularMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Home;
