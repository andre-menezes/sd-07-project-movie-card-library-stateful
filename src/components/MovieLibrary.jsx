import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.updateByText = this.updateByText.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.updateByChecked = this.updateByChecked.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.updateByGenre = this.updateByGenre.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { value } = target;
    this.setState({ searchText: value });
    this.updateByText();
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
    this.updateByChecked();
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    if (value !== '') {
      this.setState({ selectedGenre: value });
    }
    const { selectedGenre } = this.state;
    if (selectedGenre.length > 0) {
      this.updateByGenre();
    }
  }

  updateByGenre() {
    const { movies, selectedGenre } = this.state;
    if (selectedGenre.length !== 0) {
      const newList = movies.filter((movie) => movie.genre === selectedGenre);
      this.setState({ movies: newList });
    }
  }

  updateByChecked() {
    const { movies, bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      const newList = movies.filter((movie) => movie.bookmarked);
      this.setState({ movies: newList });
    }
  }

  updateByText() {
    const { movies, searchText } = this.state;
    const newList = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    this.setState({ movies: newList });
  }


  addNewMovie({
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  }) {
    const newMovie = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
