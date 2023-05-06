import axios from 'axios';

export const PERSONAL_KEY = 'a4c56cb8fbee20099fe28460c31a452a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${PERSONAL_KEY}
`
  );
  return response.data;
};

export default fetchPopularMovies;
