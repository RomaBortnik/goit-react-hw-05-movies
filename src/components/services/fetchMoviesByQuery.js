import axios from 'axios';
import { PERSONAL_KEY } from './fetchPopularMovies';
import { BASE_URL } from './fetchPopularMovies';

const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${PERSONAL_KEY}&query=${query}
`
  );
  console.log(response.data);
  return response.data;
};

export default fetchMoviesByQuery;
