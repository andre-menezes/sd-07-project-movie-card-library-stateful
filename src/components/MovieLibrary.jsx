import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filter = this.filter.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  addMovie(newMovie) {
    this.setState(({ movies }) => ({ movies: [...movies, newMovie] }));
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let movieFilter = [...movies];

    // filtra pelo que foi digitado no input (seja no título, subtítulo ou sinopse)
    if (searchText) {
      movieFilter = movieFilter.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText),
      );
    }

    // filtra por favoritos
    if (bookmarkedOnly) {
      movieFilter = movieFilter.filter((movie) => movie.bookmarked === true);
    }

    // filtra por gênero
    if (selectedGenre) {
      movieFilter = movieFilter.filter(
        (movie) => movie.genre === selectedGenre,
      );
    }

    return movieFilter;
  }

  render() {
    return (
      <div className="movie-library">
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filter()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
