import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchMovieDetails from 'components/services/fetchMovieDetails';
import { ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieDetails(movieId, 'reviews');
        if (data.results.length === 0) {
          return toast.error('There are no reviews yet');
        } else {
          setMovieReviews(data.results);
        }
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getMovieReviews();
  }, [movieId]);

  console.log(movieReviews);
  return (
    <>
      <ul>
        {movieReviews.length !== 0 &&
          movieReviews.map(el => {
            return (
              <ReviewsItem key={el.id}>
                <h3>{el.author}</h3>
                <p>{el.content}</p>
              </ReviewsItem>
            );
          })}
      </ul>
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Reviews;
