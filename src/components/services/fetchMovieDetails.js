import axios from 'axios';
import { PERSONAL_KEY } from './fetchPopularMovies';
import { BASE_URL } from './fetchPopularMovies';

const fetchMovieDetails = async (id, value) => {
  const response = value
    ? await axios.get(
        `${BASE_URL}/movie/${id}/${value}?api_key=${PERSONAL_KEY}`
      )
    : await axios.get(`${BASE_URL}/movie/${id}?api_key=${PERSONAL_KEY}`);
  return response.data;
};

export default fetchMovieDetails;
