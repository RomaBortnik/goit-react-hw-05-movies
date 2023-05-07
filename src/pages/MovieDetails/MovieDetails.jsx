import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchMovieDetails from 'components/services/fetchMovieDetails';
import MovieInfo from 'components/MovieInfo';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movieDetails.genres && (
        <>
          <MovieInfo movie={movieDetails} />
          <hr></hr>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr></hr>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default MovieDetails;
