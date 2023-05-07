import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, name } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
