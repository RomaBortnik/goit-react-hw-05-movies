import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, name } = movie;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
