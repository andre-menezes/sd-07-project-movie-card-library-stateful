import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
