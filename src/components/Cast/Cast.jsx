import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchMovieDetails from 'components/services/fetchMovieDetails';
import { IMAGES_BASE_URL } from 'components/MovieInfo/MovieInfo';
import { CastItem, CastImage, CastName } from './Cast.styled';
import defaultPicture from '../../pictures/defaultPicture.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieDetails(movieId, 'credits');
        if (data.cast.length === 0) {
          return toast.error('There are no information about this.');
        } else {
          setMovieCast(data.cast);
        }
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {movieCast.length !== 0 && (
        <ul>
          {movieCast.map(el => {
            return (
              <CastItem key={el.cast_id}>
                <CastImage
                  src={
                    el.profile_path
                      ? IMAGES_BASE_URL + el.profile_path
                      : defaultPicture
                  }
                  alt={el.name}
                />
                <CastName>{el.name}</CastName>
              </CastItem>
            );
          })}
        </ul>
      )}
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Cast;
